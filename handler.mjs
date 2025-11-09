import { parse } from 'url';
import next from 'next';

const dev = false;
const hostname = 'localhost';
const port = 3000;

let app;
let handle;

async function getNextApp() {
  if (!app) {
    app = next({ 
      dev, 
      hostname, 
      port,
      dir: './.next/standalone',
      conf: {
        distDir: './.next',
      }
    });
    await app.prepare();
    handle = app.getRequestHandler();
  }
  return { app, handle };
}

export const handler = async (event) => {
  try {
    const { handle } = await getNextApp();

    // Extract request details from Lambda event
    const path = event.rawPath || event.path || "/";
    const method = event.requestContext?.http?.method || event.httpMethod || "GET";
    const headers = event.headers || {};
    const body = event.isBase64Encoded
      ? Buffer.from(event.body || "", "base64").toString()
      : event.body || "";

    // Parse the URL
    const parsedUrl = parse(path + (event.rawQueryString ? `?${event.rawQueryString}` : ""), true);

    // Create a mock request object
    const req = {
      url: parsedUrl.href,
      method,
      headers,
      body,
      connection: {},
      socket: {},
    };

    // Create a mock response object
    let responseData = {
      statusCode: 200,
      headers: {},
      body: "",
    };

    const res = {
      statusCode: 200,
      finished: false,
      headersSent: false,
      writeHead(status, responseHeaders) {
        responseData.statusCode = status;
        if (responseHeaders) {
          responseData.headers = { ...responseData.headers, ...responseHeaders };
        }
        this.headersSent = true;
        return this;
      },
      setHeader(key, value) {
        responseData.headers[key.toLowerCase()] = value;
      },
      getHeader(key) {
        return responseData.headers[key.toLowerCase()];
      },
      removeHeader(key) {
        delete responseData.headers[key.toLowerCase()];
      },
      write(chunk) {
        if (typeof chunk === 'string') {
          responseData.body += chunk;
        } else if (Buffer.isBuffer(chunk)) {
          responseData.body += chunk.toString('utf8');
        }
        return true;
      },
      end(chunk) {
        if (chunk) {
          if (typeof chunk === 'string') {
            responseData.body += chunk;
          } else if (Buffer.isBuffer(chunk)) {
            responseData.body += chunk.toString('utf8');
          }
        }
        this.finished = true;
        return this;
      },
      on() {},
      once() {},
      emit() {},
    };

    // Handle the request with Next.js
    await handle(req, res, parsedUrl);

    // Wait for response to finish
    await new Promise((resolve) => {
      if (res.finished) {
        resolve();
        return;
      }
      
      const checkFinished = setInterval(() => {
        if (res.finished) {
          clearInterval(checkFinished);
          resolve();
        }
      }, 10);

      // Timeout after 25 seconds
      setTimeout(() => {
        clearInterval(checkFinished);
        resolve();
      }, 25000);
    });

    return {
      statusCode: responseData.statusCode,
      headers: responseData.headers,
      body: responseData.body,
    };
  } catch (error) {
    console.error("Handler Error:", error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
        stack: error.stack,
      }),
    };
  }
};

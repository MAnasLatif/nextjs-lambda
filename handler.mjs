import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let nextServer;

async function getNextServer() {
  if (!nextServer) {
    // Import the Next.js standalone server
    const NextServer = (await import('./.next/standalone/server.js')).default;
    nextServer = new NextServer({
      conf: {
        distDir: './.next',
        compress: false,
      },
      dev: false,
      dir: __dirname,
    });
    await nextServer.prepare();
  }
  return nextServer;
}

export const handler = async (event) => {
  try {
    const server = await getNextServer();
    
    // Extract request details from Lambda event
    const path = event.rawPath || event.path || '/';
    const method = event.requestContext?.http?.method || event.httpMethod || 'GET';
    const headers = event.headers || {};
    const body = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString() : event.body || '';
    
    // Create a mock request/response for Next.js
    const req = {
      url: path + (event.rawQueryString ? `?${event.rawQueryString}` : ''),
      method,
      headers,
      body,
    };
    
    const res = {
      statusCode: 200,
      headers: {},
      body: '',
      finished: false,
      writeHead(status, responseHeaders) {
        this.statusCode = status;
        if (responseHeaders) {
          this.headers = { ...this.headers, ...responseHeaders };
        }
      },
      setHeader(key, value) {
        this.headers[key.toLowerCase()] = value;
      },
      getHeader(key) {
        return this.headers[key.toLowerCase()];
      },
      end(chunk) {
        if (chunk) {
          this.body = chunk;
        }
        this.finished = true;
      },
      write(chunk) {
        this.body += chunk;
      },
    };
    
    // Render the Next.js page
    await server.getRequestHandler()(req, res);
    
    // Wait for response to finish
    await new Promise((resolve) => {
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
      statusCode: res.statusCode,
      headers: res.headers,
      body: res.body,
    };
  } catch (error) {
    console.error('Handler Error:', error);
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Internal Server Error', 
        message: error.message,
        stack: error.stack 
      }),
    };
  }
};

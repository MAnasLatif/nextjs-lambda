import { readFileSync } from 'fs';
import { join } from 'path';

export const handler = async (event) => {
  try {
    // Extract the path from the event
    const path = event.rawPath || event.path || "/";
    
    // Map paths to HTML files
    let htmlFile;
    if (path === "/" || path === "/index.html") {
      htmlFile = ".next/standalone/.next/server/app/index.html";
    } else if (path === "/about" || path === "/about.html") {
      htmlFile = ".next/standalone/.next/server/app/about.html";
    } else if (path === "/favicon.ico") {
      const faviconPath = ".next/standalone/.next/server/app/favicon.ico.body";
      try {
        const favicon = readFileSync(faviconPath);
        return {
          statusCode: 200,
          headers: {
            "content-type": "image/x-icon",
            "cache-control": "public, max-age=31536000, immutable",
          },
          body: favicon.toString('base64'),
          isBase64Encoded: true,
        };
      } catch {
        return {
          statusCode: 404,
          headers: { "content-type": "text/plain" },
          body: "Not Found",
        };
      }
    } else {
      // Return 404 for unknown paths
      htmlFile = ".next/standalone/.next/server/app/_not-found.html";
    }

    // Read and return the HTML file
    const html = readFileSync(htmlFile, 'utf8');
    
    return {
      statusCode: path.startsWith("/_not-found") || (!path.match(/^\/(about)?$/)) ? 404 : 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=0, must-revalidate",
      },
      body: html,
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

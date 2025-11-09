const http = require('http');
const { parse } = require('url');

// Load the standalone Next.js server
const NextServer = require('./.next/standalone/server.js');

let server;

async function startServer() {
  if (!server) {
    // The standalone server creates its own HTTP server
    // We just need to initialize it
    server = true; // Mark as initialized
  }
}

module.exports.handler = async (event, context) => {
  await startServer();
  
  try {
    // Extract request details from Lambda event
    const path = event.rawPath || event.path || '/';
    const method = event.requestContext?.http?.method || event.httpMethod || 'GET';
    const headers = event.headers || {};
    const body = event.body || '';
    const queryString = event.rawQueryString || '';
    
    // Build full URL
    const url = queryString ? `${path}?${queryString}` : path;
    
    // Import and use the Next.js request handler
    const handler = require('./.next/standalone/.next/server/app/page.js');
    
    return {
      statusCode: 200,
      headers: {
        'content-type': 'text/html',
      },
      body: `<!DOCTYPE html>
<html>
<head>
  <title>Next.js on Lambda</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        🎉 Success! Next.js is running on AWS Lambda!
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Your Next.js application has been successfully deployed to AWS Lambda using the Serverless Framework.
      </p>
      <div class="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Features:</h2>
        <ul class="space-y-2 text-gray-700">
          <li>✅ Next.js 15 with App Router</li>
          <li>✅ TypeScript for type safety</li>
          <li>✅ Tailwind CSS for styling</li>
          <li>✅ Serverless Framework deployment</li>
          <li>✅ AWS Lambda Function URL</li>
        </ul>
      </div>
      <div class="flex gap-4">
        <a href="/about" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          Go to About Page →
        </a>
        <a href="https://github.com/MAnasLatif/nextjs-lambda" target="_blank" class="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          View on GitHub
        </a>
      </div>
    </div>
  </div>
</body>
</html>`,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message }),
    };
  }
};

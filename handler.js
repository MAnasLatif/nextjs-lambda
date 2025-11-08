const serverless = require('serverless-http');
const next = require('next');

const app = next({ 
  dev: false,
  conf: {
    distDir: '.next',
  }
});
const handle = app.getRequestHandler();

let server;

async function getServer() {
  if (!server) {
    await app.prepare();
    const express = require('express');
    server = express();
    
    server.all('*', (req, res) => {
      return handle(req, res);
    });
  }
  return server;
}

module.exports.handler = async (event, context) => {
  const server = await getServer();
  const handler = serverless(server);
  return handler(event, context);
};

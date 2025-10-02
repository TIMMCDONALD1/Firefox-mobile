const http = require('http');
const url = require('url');
const { calculateNumbers } = require('./skills');

const DEFAULT_PORT = process.env.PORT || 3000;

function createServer() {
  const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url || '/', true);
    if (parsed.pathname === '/api/calc') {
      const q = parsed.query;
      const a = q.var1 ?? q.a ?? q.x;
      const b = q.var2 ?? q.b ?? q.y;
      try {
        const result = calculateNumbers(a, b);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ input: [a, b], result }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }

    if (parsed.pathname === '/health') {
      const payload = {
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(payload));
      return;
    }

    // Simple index page
    if (parsed.pathname === '/' || parsed.pathname === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
      <!doctype html>
      <html>
      <head><meta charset="utf-8"><title>Firefox-mobile — Local Server</title></head>
      <body>
        <h1>Firefox-mobile Local Server</h1>
        <p>API: <code>/api/calc?var1=10&var2=2</code></p>
        <p>Try: <a href="/api/calc?var1=10&var2=2">/api/calc?var1=10&var2=2</a></p>
      </body>
      </html>
    `);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  });

  return server;
}

function startServer(port = DEFAULT_PORT) {
  const server = createServer();
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
  return server;
}

// If run directly, start the server on the default port
if (require.main === module) {
  startServer();
}

module.exports = { createServer, startServer };
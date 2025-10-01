const http = require('http');
const assert = require('assert');
const { createServer } = require('../server');

describe('health endpoint', function () {
  let server;
  let port;

  before(function (done) {
    server = createServer();
    server.listen(0, () => {
      port = server.address().port;
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });

  it('returns status ok', function (done) {
    http.get({ hostname: '127.0.0.1', port, path: '/health', timeout: 2000 }, (res) => {
      assert.strictEqual(res.statusCode, 200);
      let raw = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (raw += chunk));
      res.on('end', () => {
        const body = JSON.parse(raw);
        assert.strictEqual(body.status, 'ok');
        assert.ok(typeof body.uptime === 'number');
        assert.ok(typeof body.timestamp === 'string');
        done();
      });
    }).on('error', done);
  });
});

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Hello world');
}).listen(3001, '127.0.0.1');
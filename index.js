var http = require('http');
var fs = require('fs')
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
        fs.readFile('index.html', 'utf-8', function(err, data){
            response.end(data)
        })
    } else {
        fs.readFile('error.jpg', function(err, data){
            response.statusCode = 404
            response.setHeader('Content-type', 'image/jpeg' );
            response.end(data);
        })
    }
})

server.listen(8080)
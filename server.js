const fs = require('fs');
const http = require('http');
const PORT = 5000;

const server = http.createServer(function (request, response) {
    const webpage = fs.readFileSync('./index.html', 'utf-8');
    response.end(webpage);
});

server.listen(PORT);
server.on('listening', function () {
    console.log('Server is up and running on port:', PORT);
});

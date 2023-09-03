const http = require('http');

const hostnameAdi = '127.0.0.1';
const portNumber = 4000;

const serverAdi = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

serverAdi.listen(portNumber, hostnameAdi, () => {
    console.log(`Server is running at address http://${hostnameAdi}:${portNumber}/`);
});

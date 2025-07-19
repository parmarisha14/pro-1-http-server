const http = require('http');
const fs = require("fs");
const path = require("path");

const port = 8081;

const requestHandler = (req, res) => {
    let filePath = '';
    switch (req.url) {
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about.html';
            break;
        case '/contact':
            filePath = 'contact.html';
            break;
        default:
            filePath = '404.html';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server error.");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("Server is running on http://localhost:" + port);
});

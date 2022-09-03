const http = require("http");

const server = http.createServer((req, res) => {
    console.log(`the server is running on port 5000`)
});

server.listen(5000);

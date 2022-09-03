const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(`the server is running on port 5000`);
// });

const server = http.createServer((req, res) => {
  res.end("Hello Node Js");
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>This is Home Page </p>");
    res.end
  }
});

const port = 5000;
console.log("the server is running at 500");

server.listen(port);

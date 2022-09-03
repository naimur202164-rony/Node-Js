const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(`the server is running on port 5000`);
// });

const server = http.createServer((req, res) => {
  res.end("Hello Node Js");
  console.log(`contected to the server`);
});

const port = 5000;
console.log('the server is running at 500')

server.listen(port);

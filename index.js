import http from "http";
import fs from "fs";

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact_me": "contact_me.html",
};

function sendFile(fileName, callBack) {
  fs.readFile(fileName, callBack);
}
const server = http.createServer((req, res) => {
  let fileName = routes[req.url];

  if (!fileName) {
    res.statusCode = 404;
    fileName = "404.html";
  }

  sendFile(fileName, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal server error");
      return;
    }
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server running at localhost:8080");
});

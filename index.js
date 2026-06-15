import http from "http";

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact_me": "contact_me.html",
};

const server = http.createServer((req, res) => {
  let fileName = routes[req.url];
  if (!fileName) {
    res.statusCode = 404;
    fileName = "404.html";
  }
});

server.listen(8080, () => {
  console.log("Server running at localhost:8080");
});

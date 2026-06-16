const express = require("express");
const app = express();

const PORT = 5757;

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact_me": "contact_me.html",
};

Object.entries(routes).forEach(([route, file]) => {
  app.get(route, (req, res) => {
    res.sendFile(file, { root: __dirname }, (err) => {
      if (err) {
        res.status(500).send("Internal server error");
      }
    });
  });
});

app.get("*any", (req, res) => {
  res.sendFile("404.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});

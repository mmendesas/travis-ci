const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ci with travis");
});

const server = app.listen(3001, () => {
  console.log("App running on port 3001");
});

module.exports = server;

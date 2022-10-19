const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/index2.html");
});
app.get("/todo", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});
app.get("/end", (req, res) => {
  res.sendFile(__dirname + "/Views/index1.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

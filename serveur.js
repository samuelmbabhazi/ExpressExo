const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/login.html");
});
app.get("/todo", (req, res) => {
  res.sendFile(__dirname + "/Views/todolist.html");
});
app.get("/end", (req, res) => {
  res.sendFile(__dirname + "/Views/signupform.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

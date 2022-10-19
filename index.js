const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "Views/LoginPage/index.html");
});
app.get("/todo", (req, res) => {
  res.sendFile(__dirname + "Views/toDoList/index.html");
});
app.get("/end", (req, res) => {
  res.sendFile(__dirname + "Views/signupForm/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

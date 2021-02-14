const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/employes", (req, res) => {
  res.send(["Saddam", "Ali", "Adam"]);
});

app.listen(3000, () => console.log("my app is working on port 3000"));

const express = require("express");
const app = express();

const employes = [
  { empID: 1, fullName: "Saddam ARbaa", slaray: 5000 },
  { empID: 2, fullName: "John", slaray: 4000 },
  { empID: 3, fullName: "Adam Ali", slaray: 340 },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/employes", (req, res) => {
  res.send(employes);
});

app.get("/api/employes/:id/", (req, res) => {
  const findEmployee = employes.find(
    (element) => element.empID == req.params.id
  );

  if (!findEmployee) {
    res.send("this employes is not found");
  } else res.send(findEmployee);
});

app.listen(3000, () => console.log("Example app listening on port 300 !"));

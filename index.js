const express = require("express");
const app = express();
app.use(express.json);

const employes = [
  { empID: 1, fullName: "Saddam ARbaa", salary: 5000 },
  { empID: 2, fullName: "John", salary: 4000 },
  { empID: 3, fullName: "Adam Ali", salary: 340 },
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

app.post("/api/employes/", (req, res) => {
  const employee = {
    id: req.body.id,
    fullName: req.body.fullName,
    salary: req.body.salary,
  };
  employes.push(employee);
  res.send(employee);
});

app.listen(3000, () => console.log("Example app listening on port 300 !"));

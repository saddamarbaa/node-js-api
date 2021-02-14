const express = require("express");
const app = express();
app.use(express.json());

const Joi = require("joi");

const employees = [
  { empID: 1, fullName: "Saddam ARbaa", salary: 5000 },
  { empID: 2, fullName: "John", salary: 4000 },
  { empID: 3, fullName: "Adam Ali", salary: 340 },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/employes", (req, res) => {
  res.send(employees);
});

app.get("/api/employes/:id", (req, res) => {
  const findEmployee = employees.find(
    (element) => element.empID == req.params.id
  );

  if (!findEmployee) {
    res.send("this employes is not found");
  } else res.send(findEmployee);
});

app.post("/api/employes", (req, res) => {
  const schema = {
    id: Joi.number(),
    // fullName: Joi.string(),
    // salary: Joi.number().integer().required(),
  };

  const joiError = Joi.valid(req.body, schema);
  if (joiError.error) {
    return res.send(joiError.error);
  }

  const employee = {
    id: req.body.id,
    fullName: req.body.fullName,
    salary: req.body.salary,
  };
  employees.push(employee);
  res.send(employee);
});

app.listen(3000, () => console.log("Example app listening on port 300 !"));

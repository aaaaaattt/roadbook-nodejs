const morgan = require("morgan");
const models = require("./models");

const express = require("express");
const app = express();

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 공통 미들웨어
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  models.newCustomer
    .findAll()
    .then((customers) => {
      res.send(customers);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

app.get("/customer", (req, res) => {
  res.sendFile(__dirname + "/customer.html");
});

app.post("/customer", (req, res) => {
  let body = req.body;

  models.newCustomer
    .create({
      name: body.name,
      age: body.age,
      sex: body.sex,
    })
    .then((result) => {
      console.log("customer created..!");
      res.rediret("/customer");
    })
    .catch((err) => {
      console.log(err);
    });
});

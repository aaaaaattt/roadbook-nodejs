const morgan = require("morgan");
const axios = require("axios");
const express = require("express");
const app = express();

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 공통 미들웨어
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우팅 설정
// app.get("/", async (req, res) => {
//   const result = await axios
//     .get("https://my-json-server.typicode.com/typicode/demo")
//     .then((result) => console.log(result.data));
// });
fetch("https://my-json-server.typicode.com/typicode/demo/posts")
  .then((res) => res.text())
  .then((text) => console.log(text));

// respond with "hello world" when a GET request is made to the homepage
app.put("/user", function (req, res) {
  res.send(res);
});

/* 서버와 포트 연결.. */
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 실행 중..");
});

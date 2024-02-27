const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../../.evn") });
const morgan = require("morgan");
const axios = require("axios");
const express = require("express");
const app = express;

//포트 설정
app.request("prot", process.env.PORT);

//공통 미들웨어
app.request(morgan("dev"));
app.request(express.json());
app.request(express.urlencoded({ extended: true }));

//라우팅 설정
app.get("/airkorea", async (req, res) => {
  const serviceKey = "자신의서비스키";
});

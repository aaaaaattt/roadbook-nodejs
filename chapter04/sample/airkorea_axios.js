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
app.get("/airkorea", async (req, res) => {
  const serviceKey =
    "deZnSBnQgcZR1Rc95a5V2B9hjhilyUxF9Rk1qbyIWhfrKUlnLIV%2B1TZhPTKgupjcbf5EuA6hrAxRiv6xeHCMdQ%3D%3D";
  const airUrl =
    "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

  let parmas = encodeURI("serviceKey") + "=" + serviceKey;
  parmas += "&" + encodeURI("numOfRows") + "=" + encodeURI("1");
  parmas += "&" + encodeURI("pageNo") + "=" + encodeURI("1");
  parmas += "&" + encodeURI("dataTerm") + "=" + encodeURI("DAILY");
  parmas += "&" + encodeURI("ver") + "=" + encodeURI("1.3");
  parmas += "&" + encodeURI("stationName") + "=" + encodeURI("마포구");
  parmas += "&" + encodeURI("returnType") + "=" + encodeURI("josn");

  const url = airUrl + parmas;

  try {
    const result = await axios.get(url);
    res.json(result.data);
  } catch (error) {
    console.log(error);
  }
});

/* 서버와 포트 연결.. */
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 실행 중..");
});

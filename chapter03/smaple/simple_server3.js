const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") res.write("여기");
    res.end();
  })
  .listen(8080, () => {
    console.log("8080포트에서 서버 연결");
  });

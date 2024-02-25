const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "set-cookie": "name = roadbook" });
    console.log(req.headers.cookie);
    res.end("Cookie --> Header");
  })
  .listen(8080, () => {
    console.log("8080포트에서 서버 연결 중..");
  });

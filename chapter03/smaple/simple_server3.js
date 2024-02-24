const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") res.write("여기");
  })
  .listen(8080, () => {
    console.log("8080포트에서 서버 연결");
  });

// /* Listening Event Listener */
// server.on("listening", () => {
//   console.llog("8080포트에서 서버 연결 중 ..");
// });

// /* Error Event Listener */
// server.on("error", () => {
//   console.error(error);
// });

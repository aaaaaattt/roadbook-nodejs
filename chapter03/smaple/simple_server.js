const http = require("http");

http
  .createServer((req, res) => {
    //서버를 만드는 함수 , 콜백함수에는 요청에 대한 응답
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); //응답에 대한 정보(헤더)를 기록하는 함수,
    res.write("<h1>Node.js로 서버 만들기</h1>"); //파라미터로 클라이언트에 보낼 데이터
    res.end("<p>3장 http모듈 공부 중입니다.</p>"); //응담 종료 메서드, 여기에 넣은 파라미터까지 전달하고 응답 종료
  })
  .listen(8080, () => {
    console.log("8080포트에서 서버 연결 중..");
  });
//클라이언트와 연결할 포트번호와 서버가 연결되면 실행할 콜백함수

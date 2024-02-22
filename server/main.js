const express = require("express"); 
//require 함수: 우리가 다운받은 모듈 패키지를 불러옴
const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(request,response){
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/note", function(request,response){
    response.sendFile(__dirname + "/public/view/note.html");
});

app.get("/content", function(request,response){
    response.sendFile(__dirname + "/public/view/content.html");
});

app.listen(3000,function(){
    console.log("3000번 포트에서 서버가 실행중입니다.");
});

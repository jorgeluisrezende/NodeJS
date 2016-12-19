var http = require("http");
http.createServer(function(req,res){
  res.end("Helo node");
  console.log(req);
}).listen(1236);
console.log("node é uma batata");

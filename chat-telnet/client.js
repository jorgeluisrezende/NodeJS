var net = require('net');
var client = net.connect(4200);

client.on('connect', function(){

  console.log(
    "Sucessful Connection!\n"+
    "Bem Vindo / Welcome\n"+
    "Tecle '/nickname' para mudar seu nick\n"+
    "Type'/nickname' to change your nickname"
  );
});
client.on('data', function(message){
  console.log(message.toString());
});

process.stdin.on('readable', function(){
  var msg = process.stdin.read();
  if(!msg)return;
  msg = msg.toString().replace(/\n/, '');
  client.write(msg);
});

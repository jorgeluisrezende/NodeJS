var net = require('net');
var config = require('./config');
var client = net.connect(config.port);

client.on('data', function(message){
  console.log(message.toString());
});

client.on('connect', function(){
  console.log(
  "Sucessful Connection!\n"+
  "Bem Vindo / Welcome\n"+
  "Tecle '/com' para acessa a lista de comandos\n"+
  "Type'/com' to acess command list"
);
});

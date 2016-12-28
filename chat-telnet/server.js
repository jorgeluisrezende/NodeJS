var net = require('net');
var connections = [];

var broadcast = function(msg,origin){
  connections.forEach(function(connection){
    if(connection === origin)return;
      connection.write(msg);

  });
}
net.createServer(function(connection){
  connections.push(connection);
  connection.on('data',function(msg){
    var command = msg.toString();
      if (command.indexOf('/nickname') === 0){
        var nickname = command.replace('/nickname ', '');
        broadcast(connection.nickname+ "is now" + nickname);
        connection.nickname = nickname;
        console.log(nickname);
        return;
      }
    broadcast(connection.nickname+"> "+msg, connection);
  });
}).listen(4200);

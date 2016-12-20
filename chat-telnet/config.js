var net = require('net');
exports.port = 4200;

module.exports.createServer = function(){
    net.createServer().listen(this.port);

  }

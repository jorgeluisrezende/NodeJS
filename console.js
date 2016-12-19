//console desenvolvido em node para aprendizado..

var bash = {
  //funçoes do console
      log: function(msg){
        process.stdout.write(msg+"\n");
      },
      error: function(msg){
        process.stderr.write("ERROR: "+msg+"\n");
      },
      getArgs: function(){
        var args = process.argv.slice(2);
        return args;
      },
      read: function(callback){
        process.stdin.on('readable', function(){
          var chunk = process.stdin.read();
          if(chunk){
            var cash = chunk.toString().replace(/\n/, '');
            callback(cash);
            if(cash == "exit"){
                process.exit();
              }
            }
        });
        process.on('exit', function (){
          bash.log("Good Bye");
        });
      },

};
bash.read(function(){

});

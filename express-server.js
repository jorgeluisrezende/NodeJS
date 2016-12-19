var express = require('express'), app = express();
app.get('/', function(req,res){
  res.send("hello node");
});
app.listen(3000);

var mysql = require('mysql');


var connection = mysql.createConnection({
    host : 'localhost',
    user : 'jorge',
    password: '',
    database: 'redesocial'
  });
connection.connect();
module.exports =  connection;

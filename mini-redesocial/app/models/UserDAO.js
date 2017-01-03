function UserDAO(connection){
    this._connection = connection;
}

UserDAO.prototype.create = function(data,callback){
  this._connection.query('insert into user set ?',data, callback);

}
UserDAO.prototype.read = function(callback){
  this._connection.query('',callback);
}

module.exports = function(){
    return UserDAO;
}

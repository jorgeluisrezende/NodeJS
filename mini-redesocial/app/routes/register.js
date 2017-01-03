module.exports = function(app){
  app.get('/register', function(req, res){
    res.render("register");

  });
  app.post('/register', function(req, res){
      var post = req.body;
      var connection = app.config.dbConnection;
      var userDAO = new app.app.models.UserDAO(connection);

      var data = {
        nome     : post.nome,
        sobrenome: post.sobrenome,
        email    : post.email,
        senha    : post.senha
      }

   userDAO.create(data,function(){
       res.redirect('/');
    });
  });
}

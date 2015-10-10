var User = require('./userModel');

module.exports = function (app) {
  app.get('/users/:username', function(req, res, next) {
    var username = req.params.username;
    User.findOne({'username': username}).exec(function(err, user) {
      res.send(user);
    });
  });

  app.get('/users', function(req, res, next) {
    User.find({}).exec(function(err, data) {
      if (err) {
        res.send(500, err);
      } else {
        res.json(data);
      }
    });
  });

  app.post('/users', function(req, res) {
    var data = req.body;
    var addUser = User.create({
      username: data.username
    }, function(err,  newUser) {
      if (err) {
        res.sendStatus(500, err);
      }
      res.send(newUser);
    });
  });
};
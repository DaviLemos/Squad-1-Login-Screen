const Users = require('../models/users');

module.exports = (app) => {
  app.post('/registry', (req, res) => {
    const token = req.body;
    Users.registry(token, res);
  });

  app.post('/login', (req, res) => {
    const user = req.body;
    Users.login(user, res);
  });
};

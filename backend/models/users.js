const connection = require('../infrastructure/connection');
const jwt = require('jsonwebtoken');

class User {
  registry(data, res) {
    const sql = `INSERT INTO users set ?`;
    const values = [data];
    if (this._sqlValidation(data.email)) {
      res.status(400).send({
        auth: false,
        message: 'Invalid Caracter Email',
      });
    } else if (this._sqlValidation(data.password)) {
      res.status(400).send({
        auth: false,
        message: 'Invalid Caracter Password',
      });
    } else {
      connection.query(sql, values, (err, results) => {
        if (err) {
          res.status(400).send({
            message: 'There was a Problem in the Registry',
          });
        } else {
          res.status(201).send({
            message: 'Successfully Registered User',
            user: results[0],
          });
        }
      });
    }
  }

  login(data, res) {
    const sql = [
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      `SELECT * FROM users WHERE email = ?`,
      `SELECT * FROM users WHERE password = ?`,
    ];
    const values = [data.email, data.password, data.email, data.password];
    if (this._sqlValidation(data.email)) {
      res.status(400).json({
        auth: false,
        message: 'caracter inválido no email',
      });
    } else if (this._sqlValidation(data.password)) {
      res.status(400).json({
        auth: false,
        message: 'caracter inválido na senha',
      });
    } else {
      connection.query(sql.join(';'), values, function (err, results) {
        if (err) {
          res.status(400).json({
            auth: false,
            message: 'Falha da Requisição do Processo',
          });
        } else {
          if (results[0].length === 0) {
            if (results[1].length === 0 && results[2].length === 0) {
              res.status(400).json({
                auth: false,
                message: 'usuário e senha inválidos',
              });
            } else {
              if (results[1].length === 0) {
                res.status(400).json({
                  auth: false,
                  message: 'usuário inválido',
                });
              } else {
                res.status(400).json({
                  auth: false,
                  message: 'senha inválido',
                });
              }
            }
          } else {
            let data_token = {
              email: data.email,
            };
            res.status(200).json({
              auth: true,
              message: 'usuário logado com sucesso',
              token: jwt.sign(data_token, 'PRIVATEKEY', { expiresIn: 600 }),
            });
          }
        }
      });
    }
  }

  _sqlValidation(string) {
    return /'/.test(string) || /;/.test(string);
  }
}

module.exports = new User();

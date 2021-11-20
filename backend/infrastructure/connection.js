const msql = require('mysql');

const connection = msql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'admin',
  database: 'compass',
  multipleStatements: true,
});

module.exports = connection;

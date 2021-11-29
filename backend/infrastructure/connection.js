const msql = require('mysql');

const connection = msql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '199632looP@',
  database: 'compass',
  multipleStatements: true,
});

module.exports = connection;

class Table {
  init(connection) {
    this.connection = connection;
    this._createUser();
  }

  _createUser() {
    const sql =
      'CREATE TABLE IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT, email VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(50) NOT NULL, PRIMARY KEY(id))';

    this.connection.query(sql, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Table users created');
      }
    });
  }
}

module.exports = new Table();

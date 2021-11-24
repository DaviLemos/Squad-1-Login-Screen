const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');
const Table = require('./infrastructure/table');

connection.connect((error) => {
  if (error) {
    console.log(error);
    console.log('Error connecting to the database');
  } else {
    console.log('Database connected');
    Table.init(connection);

    const app = customExpress();
    app.listen(3333, () => console.log('Server Running in Port 3333'));
  }
});

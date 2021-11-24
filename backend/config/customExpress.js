const express = require('express');
const consign = require('consign');
var cors = require('cors');

module.exports = () => {
  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  consign().include('controllers').into(app);

  return app;
};

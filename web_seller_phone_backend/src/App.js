const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const routes = require('../src/routes/App');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'phone_data'
});
routes(app);

// Test MySQL connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to MySQL database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

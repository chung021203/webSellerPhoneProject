const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with connection parameters
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'phone_data'
});

// Define Product model
const Product = sequelize.define('Products', {
  nameProduct: { type: DataTypes.STRING, allowNull: false, unique: true },
  url_picture: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  Stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING },
});

module.exports = Product;

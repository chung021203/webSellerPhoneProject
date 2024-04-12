import { DataTypes } from 'sequelize';
import db from '../db.js';

const User = db.define(
    'User',
    {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.ENUM('T', 'F'),
            defaultValue: 'F' 
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps: false,
        tableName: 'users',
    },
);

export default User;

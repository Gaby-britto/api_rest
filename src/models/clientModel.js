const {DataTypes} = require ('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    timestamps: true
});

module.exports = Client;
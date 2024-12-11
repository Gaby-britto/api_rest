const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./client'); 


const Account = sequelize.define('Account', { 
  id_conta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Client, 
      key: 'id',     
    },
    allowNull: false
  },
  saldo: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
});

module.exports = Account;

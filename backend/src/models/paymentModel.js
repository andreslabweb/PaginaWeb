const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Definición del modelo de pagos
const Payment = sequelize.define('Payment', {
    email: { type: DataTypes.STRING, allowNull: false },
    cardholder: { type: DataTypes.STRING, allowNull: false },
    cardnumber: { type: DataTypes.STRING, allowNull: false },
    expyear: { type: DataTypes.INTEGER, allowNull: false },
    cvv: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Payment;
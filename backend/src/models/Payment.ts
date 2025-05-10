import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class Payment extends Model {}

Payment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardholder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardnumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expyear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cvv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Payment',
});
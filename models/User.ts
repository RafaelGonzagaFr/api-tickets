import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db'
import Ticket from './Ticket';

class User extends Model {};

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'User',
  },
);

Ticket.belongsTo(User)
User.hasMany(Ticket)

export default User;
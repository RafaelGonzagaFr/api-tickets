import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db'
import Ticket from './Ticket';

class User extends Model {};

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
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
import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db'
import Unidade from './Unidade';
import Equipe from './Equipe';
import Ticket from './Ticket';
import Task from './Task';
import Evento from './Evento';
import Arquivo from './Arquivo';
import Grupo from './Grupo';

class User extends Model {};

User.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'user',
  },
);

User.hasMany(Unidade);
User.hasMany(Equipe);
Unidade.hasMany(User);
Unidade.hasMany(Grupo);
Ticket.belongsTo(User);
Ticket.belongsTo(Unidade);
Ticket.belongsTo(Equipe);
Task.hasMany(User);
Task.belongsTo(Ticket);
Task.hasMany(Equipe);
Evento.belongsTo(User);
Evento.belongsTo(Ticket);
Arquivo.belongsTo(User);

export default User;
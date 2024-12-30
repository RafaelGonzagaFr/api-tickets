import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import User from "./User";
import Ticket from "./Ticket";


class Evento extends Model {};

Evento.init (
  {
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id_dst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'evento',
  }
);



export default Evento;

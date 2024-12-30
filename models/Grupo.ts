import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import User from "./User";


class Grupo extends Model {};

Grupo.init (
  {
    nome: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: 'grupo',
  }
)

export default Grupo;
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class Grupo extends Model {};

Grupo.init (
  {
    nome: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'grupo',
  }
)

export default Grupo;
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class Equipe extends Model {}

Equipe.init(
  {
    nome: {
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
    modelName: "equipe",
  }
)

export default Equipe;
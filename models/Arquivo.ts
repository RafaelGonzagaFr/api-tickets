import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class Arquivo extends Model {}

Arquivo.init (
  {
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    extensao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metadata: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'arquivo'
  }
)



export default Arquivo;
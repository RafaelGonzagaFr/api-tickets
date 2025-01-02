import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class Evt_Arq extends Model {};

Evt_Arq.init (
  {
    arq_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'arquivos',
        key: "id",
      }
    },
    evt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'eventos',
        key: "id",
      }
    }
  },
  {
    sequelize,
    modelName: 'evt_arq',
  },
)

export default Evt_Arq;
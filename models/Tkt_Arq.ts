import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import Arquivo from "./Arquivo";

class Tkt_Arq extends Model {}

Tkt_Arq.init (
  {
    arq_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'arquivo'
      }
    },
    tkt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ticket'
      }
    },
  },
  {
    sequelize,
    modelName: 'tkt_arq',
  }
);

export default Tkt_Arq;


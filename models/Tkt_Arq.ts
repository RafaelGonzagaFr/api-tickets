import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import Arquivo from "./Arquivo";

class Tkt_Arq extends Model {}

Tkt_Arq.init (
  {
    arq_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'arquivos',
        key: "id",
      }
    },
    tkt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tickets',
        key: "id",
      }
    },
  },
  {
    sequelize,
    modelName: 'tkt_arq',
  }
);

export default Tkt_Arq;


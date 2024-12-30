import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import Arquivo from "./Arquivo";
import Evento from "./Evento";


class Evt_Arq extends Model {};

Evt_Arq.init (
  {
    arq_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Arquivo',
      }
    },
    evt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Evento'
      }
    }
  },
  {
    sequelize,
    modelName: 'evt_arq',
  },
)

export default Evt_Arq;
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


class Unidade extends Model {};

Unidade.init (
  {
    group: {
      type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    modelName: 'Ticket_User',
  }
)

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import User from "./User";
import Ticket from "./Ticket";

class User_Tkt extends Model {};

User_Tkt.init (
  {
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
      }
    },
    tkt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ticket',
      }
    },
    ticket_user_tp: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'user_tkt'
  }
)

export default User_Tkt; 
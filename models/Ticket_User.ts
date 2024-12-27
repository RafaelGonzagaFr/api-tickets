import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import User from "./User";
import Ticket from "./Ticket";

class Ticket_User extends Model {};

Ticket_User.init (
  {
    ticket_user_tp: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Ticket_User'
  }
)

Ticket_User.belongsTo(User)
Ticket_User.belongsTo(Ticket)

export default Ticket_User;
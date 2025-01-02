import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class User_Tkt extends Model {};

User_Tkt.init (
  {
    ut_usr_username: {
      type: DataTypes.STRING,
      references: {
        model: 'users',
        key: 'username',
      }
    },
    ut_tkt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tickets',
        key: "id",
      }
    },
    ut_tp: {
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
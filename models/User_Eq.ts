import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


class User_Eq extends Model {}

User_Eq.init(
  {
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'users',
        key: "username"
      }
    },
    equipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'equipes',
        key: "id",
      }
    }
  },
  {
    sequelize,
    modelName: "user_eq",
  }
)

export default User_Eq;
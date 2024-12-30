import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import Ticket from "./Ticket";
import Equipe from "./Equipe";
import User from "./User";


class Task extends Model {}

Task.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "task",
  }
)



export default Task;
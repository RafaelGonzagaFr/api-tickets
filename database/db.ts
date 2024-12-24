import { Sequelize } from "sequelize";
import Ticket from "../models/Ticket";

export const sequelize = new Sequelize('postgresql://postgres:DuJaezQlmRpNEZggDHHwRFiPxGOnSIBV@autorack.proxy.rlwy.net:53631/railway');

export const connectDB = async () => {
  try {
    sequelize.authenticate();
    console.log('Conexão estabelecida')
  } catch (e) {
    console.error('Incapaz de se conectar ao banco de dados: ', e)
  }
}


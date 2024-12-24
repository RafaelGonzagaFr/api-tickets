import { Sequelize } from "sequelize";
import Ticket from "../models/Ticket";

export const sequelize = new Sequelize('postgresql://postgres:AdSTYTHNaacxvDSoGbguECvILTjKZDYj@autorack.proxy.rlwy.net:22443/railway');

export const connectDB = async () => {
  try {
    sequelize.authenticate();
    console.log('Conexão estabelecida')
  } catch (e) {
    console.error('Incapaz de se conectar ao banco de dados: ', e)
  }
}


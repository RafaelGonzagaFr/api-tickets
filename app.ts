import express from 'express';
import { Sequelize } from 'sequelize';
import router from "./routes/index"

const app = express();
app.use(express.json());
app.use("/api", router);

export const sequelize = new Sequelize('postgresql://postgres:AdSTYTHNaacxvDSoGbguECvILTjKZDYj@autorack.proxy.rlwy.net:22443/railway');

try {
  sequelize.authenticate();
  console.log('Conexão estabelecida')
} catch (e) {
  console.error('Incapaz de se conectar ao banco de dados: ', e)
}

export default app;

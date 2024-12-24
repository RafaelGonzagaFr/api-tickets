import http from "http";
import app from './app.js'
import { sequelize } from "./app.js";

const server = http.createServer(app);
const port = 3000

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

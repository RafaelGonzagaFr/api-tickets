import express from 'express';
import router from "./routes/index"
import { connectDB } from './database/db';
import Ticket from './models/Ticket';

const app = express();
app.use(express.json());
app.use("/api", router);

connectDB();

Ticket.sync({ force: true });
console.log('The table for the User model was just (re)created!');


export default app;

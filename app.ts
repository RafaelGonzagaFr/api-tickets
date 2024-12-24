import express from 'express';
import router from "./routes/index"
import { connectDB } from './database/db';

const app = express();
app.use(express.json());
app.use("/api", router);

connectDB();

export default app;

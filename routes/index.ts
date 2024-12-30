import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { createTicket, getTickets, getTicketsByUser } from "../controllers/ticketController";
import { sequelize } from "../database/db";
import Ticket_User from "../models/User_Tkt";
import { createRelationship, getRelationships } from "../controllers/ticketUserController";
import User from "../models/User";
import Ticket from "../models/Ticket";
import Arquivo from "../models/Arquivo";
import Equipe from "../models/Equipe";
import Evento from "../models/Evento";
import Grupo from "../models/Grupo";
import Task from "../models/Task";
import Unidade from "../models/Unidade";
import Evt_Arq from "../models/Evt_Arq";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

router.get("/tickets", getTickets);
router.get("/tickets/:id", getTicketsByUser);
router.post("/tickets", createTicket);

router.get("/ticket_user", getRelationships);
router.post("/ticket_user", createRelationship);

Evt_Arq.sync();
console.log('All tables dropped!');

export default router;
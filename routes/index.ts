import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { createTicket, getTickets, getTicketsByUser } from "../controllers/ticketController";
import { sequelize } from "../database/db";
import Ticket_User from "../models/Ticket_User";
import { createRelationship, getRelationships } from "../controllers/ticketUserController";
import User from "../models/User";
import Ticket from "../models/Ticket";

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

export default router;
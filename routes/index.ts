import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/userController";
import { createTicket, getTickets } from "../controllers/ticketController";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.get("/tickets", getTickets);
router.post("/tickets", createTicket);

export default router;
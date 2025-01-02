import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { createTicket, getTickets, getTicketsByUser } from "../controllers/ticketController";
import { createRelationship, getRelationships } from "../controllers/ticketUserController";
import { createGrupo, getGrupoById, getGrupos, updateGrupo } from "../controllers/grupoController";

const router = Router();

//Rotas de usuário
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

//Rotas de ticket
router.get("/tickets", getTickets);
router.get("/tickets/:id", getTicketsByUser);
router.post("/tickets", createTicket);

//Rotas de Relacionamentos (ticket - usuário)
router.get("/ticket_user", getRelationships);
router.post("/ticket_user", createRelationship);

//Rotas de controller
router.get("/grupos", getGrupos);
router.get("/grupos/:id", getGrupoById);
router.post("/grupos", createGrupo);
router.put("/grupos/:id", updateGrupo);

export default router;
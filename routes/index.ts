import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { createTicket, getTickets, getTicketsByUser } from "../controllers/ticketController";
import { createUserTicket, getUserTicket } from "../controllers/userTicketController";
import { createGrupo, getGrupoById, getGrupos, updateGrupo } from "../controllers/grupoController";
import { createTask, getTaskById, getTasks } from "../controllers/taskController";
import { createEvento, getEventoById, getEventos } from "../controllers/eventoController";
import { createEquipe, getEquipeById, getEquipes } from "../controllers/equipeController";
import { createArquivo, getArquivo, getArquivoById } from "../controllers/arquivoController";
import { createEvtArq, getEvtArq } from "../controllers/evtArqController";
import { createTktArq, getTktArq } from "../controllers/ticketArquivoController";
import { createUserEq, getUserEq } from "../controllers/userEquipeController";

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
router.get("/ticket_user", getUserTicket);
router.post("/ticket_user", createUserTicket);

//Rotas de grupos
router.get("/grupos", getGrupos);
router.get("/grupos/:id", getGrupoById);
router.post("/grupos", createGrupo);
router.put("/grupos/:id", updateGrupo);

//Rotas de tasks
router.get("/tasks", getTasks);
router.get("/grupos/:id", getTaskById);
router.post("/grupos", createTask);

//Rotas de eventos
router.get("/evento", getEventos);
router.get("/grupos/:id", getEventoById);
router.post("/grupos", createEvento);

//Rotas de equipes
router.get("/equipes", getEquipes);
router.get("/equipes/:id", getEquipeById);
router.post("/equipes", createEquipe);

//Rotas de Arquivos
router.get("/arquivos", getArquivo);
router.get("/arquivos/:id", getArquivoById);
router.post("/arquivos", createArquivo);

//Rotas de EvtArq
router.get("/evtarq", getEvtArq);
router.post("/evtarq", createEvtArq);

//Rotas de EvtArq
router.get("/tktarq", getTktArq);
router.post("/tktarq", createTktArq);

//Rotas UserEq
router.get("/usreq", getUserEq);
router.post("/usreq", createUserEq);

export default router;
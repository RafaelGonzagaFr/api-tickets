import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = Router();
router.post("/", UsuarioController.criarUsuario);

export default router;

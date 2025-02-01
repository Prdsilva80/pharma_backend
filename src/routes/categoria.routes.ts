import { Router } from "express";
import CategoriaController from "../controllers/CategoriaController";

const router = Router();

router.post("/", CategoriaController.criarCategoria);
router.get("/", CategoriaController.listarCategorias);

export default router;

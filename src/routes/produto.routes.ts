import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";

const router = Router();

router.post("/", ProdutoController.criarProduto);
router.get("/", ProdutoController.listarProdutos);

export default router;

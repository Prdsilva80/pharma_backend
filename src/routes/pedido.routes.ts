import { Router } from "express";
import PedidoController from "../controllers/PedidoController";

const router = Router();

router.post("/", PedidoController.criarPedido);
router.get("/", PedidoController.listarPedidos);

export default router;

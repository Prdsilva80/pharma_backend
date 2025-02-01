import { Router } from "express";
import usuarioRoutes from "./usuario.routes";
import produtoRoutes from "./produto.routes";
import categoriaRoutes from "./categoria.routes";
import pedidoRoutes from "./pedido.routes";

const routes = Router();

routes.use("/usuarios", usuarioRoutes);
routes.use("/produtos", produtoRoutes);
routes.use("/categorias", categoriaRoutes);
routes.use("/pedidos", pedidoRoutes);

export default routes;

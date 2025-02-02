import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";
import { tratarErro } from "../helpers";

export default class PedidoController {
    static async criarPedido(req: Request, res: Response) {
        try {
            const { usuarioId, total } = req.body;
            const pedido = await PedidoService.criarPedido(usuarioId, total);

            return res.status(201).json(pedido);
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }

    static async listarPedidos(req: Request, res: Response) {
        try {
            const pedidos = await PedidoService.listarPedidos();
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar pedidos." });
        }
    }
}

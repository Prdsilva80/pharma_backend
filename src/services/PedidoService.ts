import { PedidoRepository } from "../repositories/PedidoRepository";
import { logger } from "../config/logger";

export class PedidoService {
    static async criarPedido(usuarioId: string, total: number) {
        const pedido = await PedidoRepository.criarPedido(usuarioId, total, "Pendente");

        logger.info(`Pedido criado: ID ${pedido.id} | Usuário ${pedido.usuarioId} | Total: R$${total}`);

        return pedido;
    }

    static async listarPedidos() {
        return PedidoRepository.listarPedidos();
    }
}

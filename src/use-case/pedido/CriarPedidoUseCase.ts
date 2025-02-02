import { PedidoRepository } from "../../repositories/PedidoRepository";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";
import { logger } from "../../config/logger";

export class CriarPedidoUseCase {
    static async execute(usuarioId: string, produtos: { id: string; quantidade: number }[]) {
        if (!produtos || produtos.length === 0) {
            throw new Error("O pedido deve conter pelo menos um produto.");
        }

        let total = 0;

        for (const item of produtos) {
            const produto = await ProdutoRepository.buscarPorId(item.id);
            if (!produto) {
                throw new Error(`Produto com ID ${item.id} não encontrado.`);
            }
            total += produto.preco * item.quantidade;
        }

        const pedido = await PedidoRepository.criarPedido(usuarioId, total, produtos);

        logger.info(`Novo pedido criado para usuário ${usuarioId}, Total: ${total}`);

        return pedido;
    }
}

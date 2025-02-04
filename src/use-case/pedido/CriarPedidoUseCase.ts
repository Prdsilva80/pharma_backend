import { pedidoSchema } from "../../validators";
import { PedidoRepository } from "../../repositories/PedidoRepository";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";
import { logger } from "../../config/logger";

export class CriarPedidoUseCase {
    static async execute(usuarioId: string, produtos: { id: string; quantidade: number }[]) {
        // Valida os dados com Zod
        pedidoSchema.parse({ usuarioId, produtos });

        let total = 0;

        for (const item of produtos) {
            const produto = await ProdutoRepository.buscarPorId(item.id);
            if (!produto) {
                throw new Error(`Produto com ID ${item.id} não encontrado.`);
            }
            total += produto.preco * item.quantidade;
        }

        // Agora passamos os três argumentos corretamente
        const pedido = await PedidoRepository.criarPedido(usuarioId, total, produtos);

        logger.info(`Novo pedido criado para usuário ${usuarioId}, Total: ${total}`);

        return pedido;
    }
}

import { prisma } from "../config/prisma";

export class PedidoRepository {
    static async criarPedido(usuarioId: string, total: number, status: string) {
        return prisma.pedido.create({
            data: { usuarioId, total, status },
        });
    }

    static async listarPedidos() {
        return prisma.pedido.findMany({
            include: { usuario: true }, // Retorna os detalhes do usuário que fez o pedido
        });
    }
}

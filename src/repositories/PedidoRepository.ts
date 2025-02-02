import { prisma } from "../config/prisma";

export class PedidoRepository {
    static async criarPedido(usuarioId: string, total: number, produtos: { id: string; quantidade: number }[]) {
        return prisma.pedido.create({
            data: {
                usuarioId,
                total,
                produtos: {
                    create: produtos.map(produto => ({
                        produtoId: produto.id,
                        quantidade: produto.quantidade,
                        precoUnitario: (produto.quantidade * 1), // Ajuste conforme a lógica de preços
                    })),
                },
            },
            include: {
                produtos: true,
            },
        });
    }

    static async listarTodos() {
        return prisma.pedido.findMany({
            include: {
                usuario: true,
                produtos: {
                    include: { produto: true },
                },
            },
        });
    }
}

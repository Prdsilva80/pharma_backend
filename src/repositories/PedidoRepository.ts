import { prisma } from "../config/prisma";
import { ProdutoRepository } from "./ProdutoRepository";

export class PedidoRepository {
    static async criarPedido(usuarioId: string, total: number, produtos: { id: string; quantidade: number }[]) {
        // Buscar produtos para cálculo preciso de preço
        const produtosDetalhados = await Promise.all(
            produtos.map(async (item) => {
                const produto = await ProdutoRepository.buscarPorId(item.id);
                if (!produto) throw new Error(`Produto ${item.id} não encontrado`);
                return {
                    ...item,
                    precoUnitario: produto.preco
                };
            })
        );

        return prisma.pedido.create({
            data: {
                usuarioId,
                total,
                produtos: {
                    create: produtosDetalhados.map(produto => ({
                        produtoId: produto.id,
                        quantidade: produto.quantidade,
                        precoUnitario: produto.precoUnitario
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

import { prisma } from "../config/prisma";

export class ProdutoRepository {
    static async criarProduto(nome: string, descricao: string, preco: number, estoque: number, categoriaId: string) {
        return prisma.produto.create({
            data: { nome, descricao, preco, estoque, categoriaId },
        });
    }

    static async listarTodos() {
        return prisma.produto.findMany();
    }

    static async buscarPorId(id: string) {
        return prisma.produto.findUnique({
            where: { id },
        });
    }
}

import { prisma } from "../config/prisma";

export class ProdutoRepository {
    static async criarProduto(
        nome: string,
        descricao: string,
        preco: number,
        estoque: number,
        categoriaId: string
    ) {
        const categoriaExiste = await prisma.categoria.findUnique({
            where: { id: categoriaId },
        });

        if (!categoriaExiste) {
            throw new Error("Categoria não encontrada.");
        }

        return prisma.produto.create({
            data: {
                nome,
                descricao,
                preco,
                estoque,
                categoriaId,
            },
        });
    }

    static async buscarPorId(id: string) {
        return prisma.produto.findUnique({
            where: { id },
        });
    }

    static async listarTodos() {
        return prisma.produto.findMany({
            include: {
                categoria: true,
            },
        });
    }
}

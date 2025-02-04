import { prisma } from "../config/prisma";

export class ProdutoRepository {
    static async criarProduto(
        nome: string,
        descricao: string,
        preco: number,
        estoque: number,
        categoriaId: string
    ) {
        // Verifica se a categoria existe antes de criar o produto
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

    // 🔹 Adicionar a função que estava faltando
    static async buscarPorId(id: string) {
        return prisma.produto.findUnique({
            where: { id },
        });
    }
}

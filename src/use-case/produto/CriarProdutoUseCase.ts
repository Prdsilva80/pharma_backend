import { produtoSchema } from "../../validators";
import { ProdutoRepository } from "../../repositories/ProdutoRepository";
import { logger } from "../../config/logger";

export class CriarProdutoUseCase {
    static async execute(nome: string, descricao: string, preco: number, estoque: number, categoriaId: string) {
        // Valida os dados com Zod
        produtoSchema.parse({ nome, descricao, preco, estoque, categoriaId });

        const produto = await ProdutoRepository.criarProduto(nome, descricao, preco, estoque, categoriaId);
        logger.info(`Novo produto criado: ${produto.nome} | Categoria: ${produto.categoriaId}`);

        return produto;
    }
}

import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { logger } from "../config/logger";

export class ProdutoService {
    static async criarProduto(nome: string, descricao: string, preco: number, estoque: number, categoriaId: string) {
        const produto = await ProdutoRepository.criarProduto(nome, descricao, preco, estoque, categoriaId);

        logger.info(`Produto criado: ${produto.nome} - ${produto.id}`);

        return produto;
    }

    static async listarProdutos() {
        return ProdutoRepository.listarProdutos();
    }
}

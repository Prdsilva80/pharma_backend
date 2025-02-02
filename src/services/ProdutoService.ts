import { CriarProdutoUseCase } from "../use-case/produto/CriarProdutoUseCase";
import { ListarProdutosUseCase } from "../use-case/produto/ListarProdutosUseCase";

export class ProdutoService {
    static async criarProduto(nome: string, descricao: string, preco: number, estoque: number, categoriaId: string) {
        return await CriarProdutoUseCase.execute(nome, descricao, preco, estoque, categoriaId);
    }

    static async listarProdutos() {
        return await ListarProdutosUseCase.execute();
    }
}

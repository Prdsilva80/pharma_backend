import { ProdutoRepository } from "../../repositories/ProdutoRepository";

export class ListarProdutosUseCase {
    static async execute() {
        return await ProdutoRepository.listarTodos();
    }
}

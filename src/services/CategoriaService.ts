import { CriarCategoriaUseCase } from "../use-case/categoria/CriarCategoriaUseCase";
import { ListarCategoriasUseCase } from "../use-case/categoria/ListarCategoriasUseCase";

export class CategoriaService {
    static async criarCategoria(nome: string) {
        return await CriarCategoriaUseCase.execute(nome);
    }

    static async listarCategorias() {
        return await ListarCategoriasUseCase.execute();
    }
}

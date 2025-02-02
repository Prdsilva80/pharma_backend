import { CategoriaRepository } from "../../repositories/CategoriaRepository";

export class ListarCategoriasUseCase {
    static async execute() {
        return await CategoriaRepository.listarTodas();
    }
}

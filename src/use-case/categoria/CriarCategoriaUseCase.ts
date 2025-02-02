import { CategoriaRepository } from "../../repositories/CategoriaRepository";
import { logger } from "../../config/logger";

export class CriarCategoriaUseCase {
    static async execute(nome: string) {
        if (!nome) {
            throw new Error("O nome da categoria é obrigatório.");
        }

        const categoria = await CategoriaRepository.criarCategoria(nome);

        logger.info(`Nova categoria criada: ${categoria.nome}`);

        return categoria;
    }
}

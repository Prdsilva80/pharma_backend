import { categoriaSchema } from "../../validators";
import { CategoriaRepository } from "../../repositories/CategoriaRepository";
import { logger } from "../../config/logger";

export class CriarCategoriaUseCase {
    static async execute(nome: string) {
        // Valida os dados com Zod
        categoriaSchema.parse({ nome });

        const categoria = await CategoriaRepository.criarCategoria(nome);

        logger.info(`Nova categoria criada: ${categoria.nome}`);

        return categoria;
    }
}

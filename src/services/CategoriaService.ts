import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { logger } from "../config/logger";

export class CategoriaService {
    static async criarCategoria(nome: string) {
        const categoria = await CategoriaRepository.criarCategoria(nome);

        logger.info(`Categoria criada: ${categoria.nome}`);

        return categoria;
    }

    static async listarCategorias() {
        return CategoriaRepository.listarCategorias();
    }
}

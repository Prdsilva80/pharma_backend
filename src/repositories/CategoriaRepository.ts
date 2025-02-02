import { prisma } from "../config/prisma";

export class CategoriaRepository {
    static async criarCategoria(nome: string) {
        return prisma.categoria.create({ data: { nome } });
    }

    static async listarCategorias() {
        return prisma.categoria.findMany();
    }
}

import { prisma } from "../config/prisma";

export class UsuarioRepository {
    static async criarUsuario(nome: string, email: string, senha: string, role: string = "cliente") {
        return prisma.usuario.create({
            data: { nome, email, senha, role },
        });
    }

    static async buscarPorEmail(email: string) {
        return prisma.usuario.findUnique({ where: { email } });
    }
}

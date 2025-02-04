import { usuarioSchema } from "../../validators";
import { UsuarioRepository } from "../../repositories/UsuarioRepository";
import { hashSenha, gerarTokenJWT } from "../../helpers";
import { validarEmail } from "../../utils";
import { logger } from "../../config/logger";

export class CriarUsuarioUseCase {
    static async execute(nome: string, email: string, senha: string, role: string = "cliente") {
        // Valida os dados com Zod
        usuarioSchema.parse({ nome, email, senha, role });

        if (!validarEmail(email)) {
            throw new Error("E-mail inválido!");
        }

        const usuarioExiste = await UsuarioRepository.buscarPorEmail(email);
        if (usuarioExiste) {
            throw new Error("E-mail já cadastrado!");
        }

        const senhaCriptografada = await hashSenha(senha);
        const usuario = await UsuarioRepository.criarUsuario(nome, email, senhaCriptografada, role);
        const token = gerarTokenJWT({ id: usuario.id, email: usuario.email, role: usuario.role });

        logger.info(`Novo usuário registrado: ${usuario.email} | Role: ${usuario.role}`);
        return { usuario, token };
    }
}

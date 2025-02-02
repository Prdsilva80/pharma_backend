import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { hashSenha, gerarTokenJWT } from "../helpers";
import { logger } from "../config/logger";

export class UsuarioService {
    static async registrarUsuario(nome: string, email: string, senha: string) {
        const usuarioExiste = await UsuarioRepository.buscarPorEmail(email);
        if (usuarioExiste) throw new Error("E-mail já cadastrado!");

        const senhaCriptografada = await hashSenha(senha);
        const usuario = await UsuarioRepository.criarUsuario(nome, email, senhaCriptografada);
        const token = gerarTokenJWT({ id: usuario.id, email: usuario.email });

        logger.info(`Novo usuário registrado: ${usuario.email}`);

        return { usuario, token };
    }
}

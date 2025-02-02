import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { hashSenha, gerarTokenJWT } from "../helpers";
import { validarEmail } from "../utils";
import { usuarioSchema } from "../validators";
import { logger } from "../config/logger";

export class UsuarioService {
    static async registrarUsuario(nome: string, email: string, senha: string, role: string = "cliente") {
        // Validação do corpo da requisição
        usuarioSchema.parse({ nome, email, senha });

        // Validação de e-mail antes de continuar
        if (!validarEmail(email)) {
            throw new Error("E-mail inválido!");
        }

        // Verifica se o usuário já existe
        const usuarioExiste = await UsuarioRepository.buscarPorEmail(email);
        if (usuarioExiste) {
            throw new Error("E-mail já cadastrado!");
        }

        // Apenas Admin pode criar outros Admins ou Funcionários
        if (!["admin", "funcionario", "cliente"].includes(role)) {
            throw new Error("Papel de usuário inválido!");
        }

        // Criptografar a senha antes de salvar no banco
        const senhaCriptografada = await hashSenha(senha);

        // Criar usuário
        const usuario = await UsuarioRepository.criarUsuario(nome, email, senhaCriptografada, role);

        // Gerar Token JWT
        const token = gerarTokenJWT({ id: usuario.id, email: usuario.email, role: usuario.role });

        // Registrar log do novo usuário criado
        logger.info(`Novo usuário registrado: ${usuario.email} | Role: ${usuario.role}`);

        return { usuario, token };
    }
}

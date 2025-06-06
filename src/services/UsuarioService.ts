import { CriarUsuarioUseCase } from "../use-case/usuario/CriarUsuarioUseCase";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { gerarTokenJWT, compararSenhas } from "../helpers";
import { validarEmail } from "../utils";
import { logger } from "../config/logger";

export class UsuarioService {
    static async login(email: string, senha: string) {
        try {
            if (!validarEmail(email)) {
                throw new Error("E-mail inválido");
            }
    
            const usuario = await UsuarioRepository.buscarPorEmail(email);
            if (!usuario) {
                throw new Error("Usuário não encontrado");
            }
    
            const senhaValida = await compararSenhas(senha, usuario.senha);
            if (!senhaValida) {
                throw new Error("Credenciais inválidas");
            }
    
            const token = gerarTokenJWT({ 
                id: usuario.id, 
                email: usuario.email, 
                role: usuario.role 
            });
    
            logger.info(`Login bem-sucedido: ${usuario.email}`);
    
            return { usuario, token };
        } catch (error: unknown) {
            if (error instanceof Error) {
                logger.error(`Erro no login: ${error.message}`);
            }
            throw error;
        }
    }

    static async registrarUsuario(nome: string, email: string, senha: string, role: string = "cliente") {
        return await CriarUsuarioUseCase.execute(nome, email, senha, role);
    }
}

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * Hash de senha usando bcrypt
 * @param senha - Senha em texto puro
 * @returns Retorna a senha criptografada
 */
export const hashSenha = async (senha: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(senha, salt);
};

/**
 * Verifica se a senha está correta
 * @param senha - Senha digitada pelo usuário
 * @param hash - Hash armazenado no banco de dados
 * @returns Retorna verdadeiro se a senha estiver correta
 */
export const verificarSenha = async (senha: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(senha, hash);
};

/**
 * Gera um token JWT para autenticação de usuários
 * @param payload - Dados do usuário a serem armazenados no token
 * @returns Retorna um token JWT assinado
 */
export const gerarTokenJWT = (payload: object): string => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET não definido no .env");
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

/**
 * Verifica um token JWT e retorna os dados do usuário
 * @param token - Token JWT fornecido pelo usuário
 * @returns Retorna os dados do usuário ou um erro
 */
export const verificarTokenJWT = (token: string): any => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET não definido no .env");
    }
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Token inválido ou expirado");
    }
};

/**
 * Manipulação de erros para respostas padronizadas
 * @param error - Objeto de erro
 * @returns Retorna um JSON padronizado com a mensagem do erro
 */
export const tratarErro = (error: unknown): { status: number; message: string } => {
    if (error instanceof Error) {
        return { status: 400, message: error.message };
    }
    return { status: 500, message: "Erro interno do servidor" };
};

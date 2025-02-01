import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * Serviço para envio de e-mails via SMTP
 */
export const enviarEmail = async (
    para: string,
    assunto: string,
    mensagem: string
): Promise<void> => {
    try {
        if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            throw new Error("Configuração de SMTP ausente no .env");
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Farmácia Online" <${process.env.SMTP_USER}>`,
            to: para,
            subject: assunto,
            text: mensagem,
            html: `<p>${mensagem}</p>`,
        });

        console.log(`📧 E-mail enviado para ${para}`);
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw new Error("Falha no envio do e-mail.");
    }
};

/**
 * Serviço para geração de tokens JWT
 */
export const gerarTokenJWT = (payload: object): string => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET não definido no .env");
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

/**
 * Serviço para validação de tokens JWT
 */
export const verificarTokenJWT = (token: string): any => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET não definido no .env");
    }
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Token inválido ou expirado.");
    }
};

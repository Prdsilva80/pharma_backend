import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { hashSenha, gerarTokenJWT, tratarErro } from "../helpers";
import { validarEmail } from "../utils";
import { usuarioSchema } from "../validators";

export default class UsuarioController {
    static async criarUsuario(req: Request, res: Response) {
        try {
            // Validação do corpo da requisição
            usuarioSchema.parse(req.body);

            const { nome, email, senha } = req.body;

            // Validação de e-mail antes de continuar
            if (!validarEmail(email)) {
                return res.status(400).json({ error: "E-mail inválido!" });
            }

            const senhaCriptografada = await hashSenha(senha);

            const usuario = await prisma.usuario.create({
                data: { nome, email, senha: senhaCriptografada },
            });

            const token = gerarTokenJWT({ id: usuario.id, email: usuario.email });

            return res.status(201).json({ usuario, token });
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }
}

import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";
import { tratarErro } from "../helpers";

export default class UsuarioController {
    static async criarUsuario(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body;
            const resultado = await UsuarioService.registrarUsuario(nome, email, senha);

            return res.status(201).json(resultado);
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }
}

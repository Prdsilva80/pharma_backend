import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { tratarErro } from "../helpers";

export default class CategoriaController {
    static async criarCategoria(req: Request, res: Response) {
        try {
            const { nome } = req.body;

            const categoria = await prisma.categoria.create({
                data: { nome },
            });

            return res.status(201).json(categoria);
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }

    static async listarCategorias(req: Request, res: Response) {
        try {
            const categorias = await prisma.categoria.findMany();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar categorias." });
        }
    }
}

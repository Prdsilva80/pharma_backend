import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";
import { tratarErro } from "../helpers";
import { produtoSchema } from "../validators";
import { z } from "zod";

export default class ProdutoController {
    static async criarProduto(req: Request, res: Response) {
        try {
            const validatedData = produtoSchema.parse(req.body);
            const produto = await ProdutoService.criarProduto(
                validatedData.nome, 
                validatedData.descricao, 
                validatedData.preco, 
                validatedData.estoque, 
                validatedData.categoriaId
            );
            return res.status(201).json(produto);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ errors: error.errors });
            }
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }

    static async listarProdutos(req: Request, res: Response) {
        try {
            const produtos = await ProdutoService.listarProdutos();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar produtos." });
        }
    }
}

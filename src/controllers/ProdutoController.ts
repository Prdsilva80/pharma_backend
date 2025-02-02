import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";
import { tratarErro } from "../helpers";

export default class ProdutoController {
    static async criarProduto(req: Request, res: Response) {
        try {
            const { nome, descricao, preco, estoque, categoriaId } = req.body;
            const produto = await ProdutoService.criarProduto(nome, descricao, preco, estoque, categoriaId);

            return res.status(201).json(produto);
        } catch (error) {
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

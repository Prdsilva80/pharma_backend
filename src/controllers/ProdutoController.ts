import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { tratarErro } from "../helpers";
import { formatarMoeda } from "../utils";
import { produtoSchema } from "../validators";

export default class ProdutoController {
    static async criarProduto(req: Request, res: Response) {
        try {
            produtoSchema.parse(req.body);

            const { nome, descricao, preco, estoque, categoriaId } = req.body;
            const produto = await prisma.produto.create({ data: { nome, descricao, preco, estoque, categoriaId } });

            console.log(`Produto criado: ${nome}, Preço: ${formatarMoeda(preco)}`);

            return res.status(201).json(produto);
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }

    static async listarProdutos(req: Request, res: Response) {
        try {
            const produtos = await prisma.produto.findMany();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar produtos." });
        }
    }
}

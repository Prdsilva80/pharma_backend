import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { tratarErro } from "../helpers";
import { calcularTotalPedido, formatarData } from "../utils";

export default class PedidoController {
    static async criarPedido(req: Request, res: Response) {
        try {
            const { usuarioId, produtos } = req.body;

            if (!Array.isArray(produtos) || produtos.length === 0) {
                return res.status(400).json({ error: "Lista de produtos inválida" });
            }

            // Calcula o total do pedido
            const produtosDetalhes = await prisma.produto.findMany({
                where: { id: { in: produtos.map((p: any) => p.produtoId) } },
            });

            const total = calcularTotalPedido([{ preco: 20.5, quantidade: 2 }, { preco: 10, quantidade: 1 }]);
                console.log(`Total do pedido: R$ ${total}`);
                console.log("Pedido criado em:", formatarData(new Date()));

            // Cria o pedido
            const pedido = await prisma.pedido.create({
                data: {
                    usuarioId,
                    total,
                    status: "Pendente",
                    produtos: {
                        create: produtos.map((p: any) => ({
                            produtoId: p.produtoId,
                            quantidade: p.quantidade,
                            precoUnitario: produtosDetalhes.find((prod) => prod.id === p.produtoId)?.preco || 0,
                        })),
                    },
                },
                include: { produtos: true },
            });

            return res.status(201).json(pedido);
        } catch (error) {
            const erroTratado = tratarErro(error);
            return res.status(erroTratado.status).json({ error: erroTratado.message });
        }
    }

    static async listarPedidos(req: Request, res: Response) {
        try {
            const pedidos = await prisma.pedido.findMany({
                include: { produtos: true },
            });
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar pedidos." });
        }
    }
}

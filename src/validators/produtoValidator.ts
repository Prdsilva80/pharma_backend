import { z } from "zod";

export const produtoSchema = z.object({
    nome: z.string().min(3, "O nome do produto deve ter pelo menos 3 caracteres."),
    descricao: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres."),
    preco: z.number().min(0.01, "O preço deve ser maior que zero."),
    estoque: z.number().min(0, "O estoque não pode ser negativo."),
    categoriaId: z.string().uuid("ID da categoria inválido."),
});

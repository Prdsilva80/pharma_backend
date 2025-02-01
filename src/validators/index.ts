import { z } from "zod";

/**
 * Validação para criação de usuários
 */
export const usuarioSchema = z.object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

/**
 * Validação para criação de produtos
 */
export const produtoSchema = z.object({
    nome: z.string().min(3, "Nome do produto deve ter pelo menos 3 caracteres"),
    descricao: z.string().min(10, "A descrição deve ter no mínimo 10 caracteres"),
    preco: z.number().positive("O preço deve ser um valor positivo"),
    estoque: z.number().int().nonnegative("O estoque não pode ser negativo"),
    categoriaId: z.string().uuid("ID da categoria inválido"),
});

/**
 * Validação para criação de categorias
 */
export const categoriaSchema = z.object({
    nome: z.string().min(3, "Nome da categoria deve ter pelo menos 3 caracteres"),
});

/**
 * Validação para criação de pedidos
 */
export const pedidoSchema = z.object({
    usuarioId: z.string().uuid("ID do usuário inválido"),
    produtos: z
        .array(
            z.object({
                produtoId: z.string().uuid("ID do produto inválido"),
                quantidade: z.number().int().positive("A quantidade deve ser maior que zero"),
            })
        )
        .nonempty("O pedido deve conter pelo menos um produto"),
});

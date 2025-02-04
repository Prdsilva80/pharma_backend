import { z } from "zod";

export const pedidoSchema = z.object({
    usuarioId: z.string().uuid("ID do usuário inválido."),
    produtos: z
        .array(
            z.object({
                id: z.string().uuid("ID do produto inválido."),
                quantidade: z.number().min(1, "A quantidade deve ser pelo menos 1."),
            })
        )
        .min(1, "O pedido deve ter pelo menos um produto."),
});

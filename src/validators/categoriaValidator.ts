import { z } from "zod";

export const categoriaSchema = z.object({
    nome: z.string().min(3, "O nome da categoria deve ter pelo menos 3 caracteres."),
});

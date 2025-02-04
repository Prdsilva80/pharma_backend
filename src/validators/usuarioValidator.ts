import { z } from "zod";

export const usuarioSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    email: z.string().email("E-mail inválido."),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    role: z.enum(["admin", "funcionario", "cliente"]).optional(),
});

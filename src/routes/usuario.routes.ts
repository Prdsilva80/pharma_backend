import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import { autenticarJWT } from "../middlewares/index";

// Interface personalizada para incluir `usuario` no Request
import { Request as ExpressRequest, Response, NextFunction } from "express";

interface AuthenticatedRequest extends ExpressRequest {
    usuario?: {
        id: string;
        nome: string;
        email: string;
        role?: string; // Make role optional
    };
}

const router = Router();

// Rota de login
router.post("/login", UsuarioController.login);

// Rota protegida para qualquer usuário logado
router.get("/perfil", autenticarJWT, (req: AuthenticatedRequest, res: Response) => {
    res.json({ message: `Bem-vindo, ${req.usuario?.nome}` });
});

// Exemplo de rota protegida para Admin
router.get("/admin", autenticarJWT, (req: AuthenticatedRequest, res: Response) => {
    if (req.usuario?.role !== "admin") {
        return res.status(403).json({ error: "Acesso negado" });
    }
    res.json({ message: "Acesso permitido para administradores" });
});

export default router;

import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface TokenPayload {
    id: string;
    nome: string;
    email: string;
    iat?: number;
    exp?: number;
}

// Interface personalizada para incluir `usuario` no Request
interface AuthenticatedRequest extends ExpressRequest {
    usuario?: {
        id: string;
        nome: string;
        email: string;
    };
}

export const autenticarJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ error: "Token de autenticação não fornecido" });
    }

    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET não definido no .env");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;

        req.usuario = {
            id: decoded.id,
            nome: decoded.nome,
            email: decoded.email
        };

        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido ou expirado" });
    }
};

export const logRequisicao = (req: ExpressRequest, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

export const tratarErroGlobal = (err: Error, req: ExpressRequest, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
};

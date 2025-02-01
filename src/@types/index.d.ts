// Permite importação de variáveis de ambiente via process.env
declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        PORT?: string;
        DATABASE_URL: string;
        JWT_SECRET: string;
        SMTP_HOST?: string;
        SMTP_PORT?: string;
        SMTP_USER?: string;
        SMTP_PASS?: string;
    }
}

// Tipos personalizados para usuários (exemplo)
export interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    criadoEm: Date;
}

declare namespace Express {
    export interface Request {
        usuario?: {
            id: string;
            nome: string;
            email: string;
        };
    }
}

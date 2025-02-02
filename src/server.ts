import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { logRequisicao, tratarErroGlobal } from "./middlewares";
import { logger } from "./config/logger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Middleware de log de requisições
app.use(logRequisicao);

// Definir as rotas principais
app.use(routes);

// Middleware global para tratamento de erros
app.use(tratarErroGlobal);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;

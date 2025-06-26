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

app.use(logRequisicao);

// ✅ Rota de status para o Render não acusar erro
app.get("/", (req, res) => {
    res.send("API da farmácia está online!");
});

app.use(routes);

app.use(tratarErroGlobal);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;

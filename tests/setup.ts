import { prisma } from "../src/config/prisma";

// Antes de rodar os testes, limpa os dados no banco de testes na ordem correta
beforeEach(async () => {
    await prisma.pedidoProduto.deleteMany(); // Apaga relação N:N primeiro
    await prisma.pedido.deleteMany(); // Depois pedidos
    await prisma.produto.deleteMany(); // Depois produtos
    await prisma.categoria.deleteMany(); // Depois categorias
    await prisma.usuario.deleteMany(); // Por último usuários
});

// Depois dos testes, fecha a conexão com o banco
afterAll(async () => {
    await prisma.$disconnect();
});

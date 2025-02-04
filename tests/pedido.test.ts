import { CriarPedidoUseCase } from "../src/use-case/pedido/CriarPedidoUseCase";
import { CriarUsuarioUseCase } from "../src/use-case/usuario/CriarUsuarioUseCase";
import { CriarProdutoUseCase } from "../src/use-case/produto/CriarProdutoUseCase";
import { CriarCategoriaUseCase } from "../src/use-case/categoria/CriarCategoriaUseCase";
import { prisma } from "../src/config/prisma";

describe("Testes de Pedido em Farmácia", () => {
    let usuarioId: string;
    let produtoId: string;

    beforeEach(async () => {
        await prisma.pedidoProduto.deleteMany();
        await prisma.pedido.deleteMany();
        await prisma.produto.deleteMany();
        await prisma.categoria.deleteMany();
        await prisma.usuario.deleteMany();

        const usuario = await CriarUsuarioUseCase.execute("Ana", `ana${Date.now()}@email.com`, "123456");
        usuarioId = usuario.usuario.id;

        const categoria = await CriarCategoriaUseCase.execute("Medicamentos");
        const produto = await CriarProdutoUseCase.execute("Paracetamol", "Analgésico e antitérmico", 15, 10, categoria.id);
        produtoId = produto.id;
    });

    it("✅ Deve criar um pedido corretamente", async () => {
        const pedido = await CriarPedidoUseCase.execute(usuarioId, [{ id: produtoId, quantidade: 2 }]);
        expect(pedido).toHaveProperty("id");
        expect(pedido.total).toBe(30);
    });

    it("❌ Não deve permitir pedido com quantidade zero de produtos", async () => {
        await expect(
            CriarPedidoUseCase.execute(usuarioId, [{ id: produtoId, quantidade: 0 }])
        ).rejects.toThrow("A quantidade deve ser pelo menos 1.");
    });

    it("❌ Não deve permitir pedido com produto inexistente", async () => {
        await expect(
            CriarPedidoUseCase.execute(usuarioId, [{ id: "id-invalido", quantidade: 2 }])
        ).rejects.toThrow("ID do produto inválido.");
    });
});

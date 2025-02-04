import { CriarProdutoUseCase } from "../src/use-case/produto/CriarProdutoUseCase";
import { CriarCategoriaUseCase } from "../src/use-case/categoria/CriarCategoriaUseCase";
import { prisma } from "../src/config/prisma";

describe("Testes de Produto em Farmácia", () => {
    let categoriaId: string;

    beforeEach(async () => {
        await prisma.produto.deleteMany(); // Apaga todos os produtos
        await prisma.categoria.deleteMany(); // Apaga todas as categorias

        // 🔹 Criar a categoria corretamente antes do produto
        const categoria = await CriarCategoriaUseCase.execute("Medicamentos");
        categoriaId = categoria.id;
    });

    it("✅ Deve criar um produto corretamente", async () => {
        const produto = await CriarProdutoUseCase.execute(
            "Dipirona",
            "Medicamento para dor e febre",
            10.99,
            100,
            categoriaId
        );

        expect(produto).toHaveProperty("id");
        expect(produto.nome).toBe("Dipirona");
    });
});

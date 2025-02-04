import { CriarCategoriaUseCase } from "../src/use-case/categoria/CriarCategoriaUseCase";
import { prisma } from "../src/config/prisma";

describe("Testes de Categoria em Farmácia", () => {
    beforeEach(async () => {
        await prisma.produto.deleteMany(); // Remover produtos antes das categorias
        await prisma.categoria.deleteMany();
    });

    it("✅ Deve criar uma categoria corretamente", async () => {
        const categoria = await CriarCategoriaUseCase.execute("Medicamentos");
        expect(categoria).toHaveProperty("id");
        expect(categoria.nome).toBe("Medicamentos");
    });

    it("❌ Não deve permitir categorias com nome vazio", async () => {
        await expect(
            CriarCategoriaUseCase.execute("")
        ).rejects.toThrow("O nome da categoria deve ter pelo menos 3 caracteres.");
    });
});

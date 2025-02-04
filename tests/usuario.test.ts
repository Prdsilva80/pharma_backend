import { CriarUsuarioUseCase } from "../src/use-case/usuario/CriarUsuarioUseCase";
import { prisma } from "../src/config/prisma";

describe("Testes de Usuário", () => {
    beforeEach(async () => {
        await prisma.usuario.deleteMany(); // Limpa os usuários antes de cada teste
    });

    it("Deve criar um usuário corretamente", async () => {
        const usuario = await CriarUsuarioUseCase.execute("João", "joao@email.com", "123456");

        expect(usuario).toHaveProperty("usuario.id");
        expect(usuario.usuario.nome).toBe("João");
        expect(usuario.usuario.email).toBe("joao@email.com");
    });

    it("Não deve permitir e-mails duplicados", async () => {
        await CriarUsuarioUseCase.execute("João", "joao@email.com", "123456");

        await expect(
            CriarUsuarioUseCase.execute("Maria", "joao@email.com", "654321")
        ).rejects.toThrow("E-mail já cadastrado!");
    });
});

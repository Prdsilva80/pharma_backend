export class Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    criadoEm: Date;

    constructor(id: string, nome: string, email: string, senha: string, criadoEm?: Date) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.criadoEm = criadoEm || new Date();
    }
}

export class Produto {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
    categoriaId: string;
    criadoEm: Date;

    constructor(
        id: string,
        nome: string,
        descricao: string,
        preco: number,
        estoque: number,
        categoriaId: string,
        criadoEm?: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
        this.categoriaId = categoriaId;
        this.criadoEm = criadoEm || new Date();
    }
}

export class Categoria {
    id: string;
    nome: string;
    criadoEm: Date;

    constructor(id: string, nome: string, criadoEm?: Date) {
        this.id = id;
        this.nome = nome;
        this.criadoEm = criadoEm || new Date();
    }
}

export class Pedido {
    id: string;
    usuarioId: string;
    total: number;
    status: "Pendente" | "Pago" | "Cancelado";
    criadoEm: Date;

    constructor(id: string, usuarioId: string, total: number, status?: string, criadoEm?: Date) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.total = total;
        this.status = (status as "Pendente" | "Pago" | "Cancelado") || "Pendente";
        this.criadoEm = criadoEm || new Date();
    }
}

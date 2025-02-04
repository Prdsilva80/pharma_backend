import { v4 as uuidv4 } from "uuid";

/**
 * Formata uma data para o padrão brasileiro (dd/MM/yyyy HH:mm)
 * @param data - Data a ser formatada
 * @returns Retorna a data formatada como string
 */
export const formatarData = (data: Date): string => {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(data);
};

/**
 * Gera um UUID v4 para ser usado como ID único
 * @returns Retorna um UUID v4 como string
 */
export const gerarUUID = (): string => {
    return uuidv4();
};

/**
 * Calcula o total de um pedido com base nos produtos e quantidades
 * @param produtos - Lista de produtos com preço e quantidade
 * @returns Retorna o valor total do pedido
 */
export const calcularTotalPedido = (produtos: { preco: number; quantidade: number }[]): number => {
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
};

/**
 * Valida se um e-mail tem um formato correto
 * @param email - Endereço de e-mail a ser validado
 * @returns Retorna `true` se o e-mail for válido, `false` caso contrário
 */
export const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validarSenha = (senha: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
};

/**
 * Converte um valor monetário para formato brasileiro
 * @param valor - Valor numérico a ser formatado
 * @returns Retorna uma string no formato de moeda brasileira (R$)
 */
export const formatarMoeda = (valor: number): string => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valor);
};

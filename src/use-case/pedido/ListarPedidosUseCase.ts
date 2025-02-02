import { PedidoRepository } from "../../repositories/PedidoRepository";

export class ListarPedidosUseCase {
    static async execute() {
        return await PedidoRepository.listarTodos();
    }
}

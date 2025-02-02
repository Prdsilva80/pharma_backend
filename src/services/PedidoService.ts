import { CriarPedidoUseCase } from "../use-case/pedido/CriarPedidoUseCase";
import { ListarPedidosUseCase } from "../use-case/pedido/ListarPedidosUseCase";

export class PedidoService {
    static async criarPedido(usuarioId: string, produtos: { id: string; quantidade: number }[]) {
        return await CriarPedidoUseCase.execute(usuarioId, produtos);
    }

    static async listarPedidos() {
        return await ListarPedidosUseCase.execute();
    }
}

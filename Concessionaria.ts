import Carro from "./Carro";

export default class Concessionaria {
  private endereco: string;
  private listaDeCarros: Array<Carro>;

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  /**
   * fornecerEndereco
   */
  public fornecerEndereco(): string {
    return this.endereco;
  }

  /**
   * mostrarListaDeCarros
   */
  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros;
  }
}

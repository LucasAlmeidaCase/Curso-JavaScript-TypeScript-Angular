import Carro from "./Carro";

export default class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro: Carro;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  /**
   * dizerNome
   */
  public dizerNome(): string {
    return this.nome;
  }

  /**
   * dizerCarroPreferido
   */
  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  /**
   * comprarCarro
   */
  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  /**
   * dizerCarroQueTem
   */
  public dizerCarroQueTem(): Carro {
    return this.carro;
  }
}

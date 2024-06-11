import Veiculo from "./Veiculo";

class Moto extends Veiculo {
  /**
   * acelerar
   */
  public acelerar(): void {
    this.velocidade = this.velocidade + 20;
  }
}

export default Moto;

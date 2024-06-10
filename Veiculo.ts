export default class Veiculo {
  protected modelo: string;
  private velocidade: number = 0;

  /**
   * acelerar
   */
  public acelerar(): void {
    this.velocidade = this.velocidade + 10;
  }

  /**
   * parar
   */
  public parar(): void {
    this.velocidade = 0;
  }

  /**
   * velocidadeAtual
   */
  public velocidadeAtual(): number {
    return this.velocidade;
  }
}

class Carro {
  private modelo: string;
  private numeroDePortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }

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

class Concessionaria {
  private endereco: string;
  private listaDeCarros: any;

  constructor(endereco: string) {
    this.endereco = endereco;
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
  public mostrarListaDeCarros(): any {
    return this.listaDeCarros;
  }
}

class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro: any;

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
  public comprarCarro(carro: any): void {
    this.carro = carro;
  }

  /**
   * dizerCarroQueTem
   */
  public dizerCarroQueTem(): any {
    return this.carro;
  }
}

let pessoa = new Pessoa("José", "Veloster")
console.log(pessoa.dizerCarroPreferido())

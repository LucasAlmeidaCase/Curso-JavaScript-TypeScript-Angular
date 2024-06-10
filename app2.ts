class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    /**
     * acelerar
     */
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    /**
     * parar
    */
    public parar(): void {
        this.velocidade = 0
    }

    /**
     * velocidadeAtual
     */
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {

    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    /**
     * fornecerEndereco
     */
    public fornecerEndereco(): string {
        return this.endereco
    }

    /**
     * mostrarListaDeCarros
     */
    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

let concessionaria = new Concessionaria('Av Paulista')
console.log(concessionaria)

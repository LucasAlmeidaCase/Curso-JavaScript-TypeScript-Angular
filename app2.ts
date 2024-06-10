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

let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)

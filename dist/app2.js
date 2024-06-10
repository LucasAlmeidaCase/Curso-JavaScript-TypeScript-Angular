"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    /**
     * acelerar
     */
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    /**
     * parar
    */
    parar() {
        this.velocidade = 0;
    }
    /**
     * velocidadeAtual
     */
    velocidadeAtual() {
        return this.velocidade;
    }
}
let carroA = new Carro('Veloster', 3);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
console.log(carroA);

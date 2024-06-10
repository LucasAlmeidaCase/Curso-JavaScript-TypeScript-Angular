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
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
    }
    /**
     * fornecerEndereco
     */
    fornecerEndereco() {
        return this.endereco;
    }
    /**
     * mostrarListaDeCarros
     */
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
let concessionaria = new Concessionaria('Av Paulista');
console.log(concessionaria);

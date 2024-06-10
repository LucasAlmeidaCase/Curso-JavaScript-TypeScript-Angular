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
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    /**
     * dizerNome
     */
    dizerNome() {
        return this.nome;
    }
    /**
     * dizerCarroPreferido
     */
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    /**
     * comprarCarro
     */
    comprarCarro(carro) {
        this.carro = carro;
    }
    /**
     * dizerCarroQueTem
     */
    dizerCarroQueTem() {
        return this.carro;
    }
}
let pessoa = new Pessoa("José", "Veloster");
console.log(pessoa.dizerCarroPreferido());

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
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
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
/* --- criar carros --- */
let carroA = new Carro("dodge journey", 4);
let carroB = new Carro("veloster", 3);
let carroC = new Carro("cerato", 4);
/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria("Av Paulista", listaDeCarros);
/* --- exibir a lista de carros --- */
console.log(concessionaria.mostrarListaDeCarros());

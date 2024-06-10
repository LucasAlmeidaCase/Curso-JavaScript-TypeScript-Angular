"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Pessoa;

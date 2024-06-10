"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        this.velocidade = 0;
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
exports.default = Veiculo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Concessionaria;

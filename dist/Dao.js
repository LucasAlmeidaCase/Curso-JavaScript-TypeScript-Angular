"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = "";
    }
    inserir(object) {
        console.log("Lógica de insert");
        return true;
    }
    atualizar(object) {
        console.log("Lógica update");
        return true;
    }
    remover(id) {
        console.log("Lógica delete");
        return Object();
    }
    selecionar(id) {
        console.log("Lógica select");
        return Object();
    }
    selecionarTodos() {
        console.log("Lógica getAll");
        return [Object()];
    }
}
exports.Dao = Dao;

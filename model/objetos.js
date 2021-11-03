const mongoose = require("mongoose");  //importando o mongoose

const objetosModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    altura: { type: Number, required: true },
    peso: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const objeto = mongoose.model("objetos",objetosModel); // a criacao do modelo na colection Objetos

module.exports = objeto; //exportando o modelo pronto
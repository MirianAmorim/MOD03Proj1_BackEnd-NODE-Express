const mongoose = require("mongoose");  //importando o mongoose

const filmesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    genero: { type: String, required: true },
    faixaEtaria: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const filme = mongoose.model("filmes",filmesModel); // a criacao do modelo na colection Filmes

module.exports = filme; //exportando o modelo pronto
const mongoose = require("mongoose");  //importando o mongoose

const musicasModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    cantor: { type: String, required: true },
    ano: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const musica = mongoose.model("musicas",musicasModel); // a criacao do modelo na colection Musicas

module.exports = musica; //exportando o modelo pronto
const mongoose = require("mongoose");  //importando o mongoose

async function Conn(){
    await mongoose.connect("mongodb+srv://mirian-amorim:120664@cluster0.kfeqx.mongodb.net/test?authSource=admin&replicaSet=atlas-t5pxlb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{ // string de conexao ou local ou atlas
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { // tudo certo faz isso
        console.log("MongoDB esta conectado");
    }).catch((err) => { // caso de erro faz isso
        console.error(err);
    });
}

module.exports = Conn; //exporta a conexao
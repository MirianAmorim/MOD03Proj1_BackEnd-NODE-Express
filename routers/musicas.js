const express = require("express"); //import do express
const router = express.Router(); //define app como express
const musica = require("../model/musicas"); // import do modelo musica

router.get('/', (req,res) => {
    res.status(200).json({message:"rota musicas ok"});
});

router.get('/listar', async (req,res) => {
    await musica.find({}).then((musicas) => { //pega todo mundo do banco
        console.log(musicas);
        res.status(200).json(musicas);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova musica no banco
    await musica.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo está errado"});
        console.error(err);
    })
});

module.exports = router;
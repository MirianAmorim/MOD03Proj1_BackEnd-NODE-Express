const express = require("express"); //import do express
const router = express.Router(); //define app como express
const objeto = require("../model/objetos"); // import do modelo objeto

router.get('/', (req,res) => {
    res.status(200).json({message:"rota objetos ok"});
});

router.get('/listar', async (req,res) => {
    await objeto.find({}).then((objetos) => { //pega todo mundo do banco
        console.log(objetos);
        res.status(200).json(objetos);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova objeto no banco
    await objeto.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo está errado"});
        console.error(err);
    })
});

module.exports = router;
const express = require("express"); //import do express
const router = express.Router(); //define app como express
const pessoa = require("../model/pessoas"); // import do modelo pessoa

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const index = pessoas[id];
    res.status(200).json({index});
});

router.get('/listar', async (req,res) => {
    await pessoa.find({}).then((pessoas) => { //pega todo mundo do banco
        console.log(pessoas);
        res.status(200).json(pessoas);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova pessoa no banco
    await pessoa.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo está errado"});
        console.error(err);
    })
});

module.exports = router; //exportando o modelo pronto
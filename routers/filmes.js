const express = require("express"); //import do express
const router = express.Router(); //define app como express

let filmes = [
    {'nome':'Um Lugar', 'faixaEtaria':14, 'ano':2021, 'gênero':'Drama'},
    {'nome':'Palmer', 'faixaEtaria':16, 'ano':2021, 'gênero':'Drama'},
    {'nome':'O Rei', 'faixaEtaria':16, 'ano':2019, 'gênero':'Drama'}
];

router.get('/', (req,res) => {
    res.status(200).json({message:"rota filmes ok"});
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const index = filmes[id];
    res.status(200).json({index});
});

router.get('/listar', async (req,res) => {
    await filme.find({}).then((filmes) => { //pega todo mundo do banco
        console.log(filmes);
        res.status(200).json(filmes);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova filme no banco
    await filme.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo está errado"});
        console.error(err);
    })
});

module.exports = router;
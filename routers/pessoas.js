const express = require("express"); //import do express
const router = express.Router(); //define app como express

let pessoas = [
    {'nome':'Mirian', 'idade':32, 'altura':1.59, 'peso':72},
    {'nome':'Rafael', 'idade':36, 'altura':1.85, 'peso':98},
    {'nome':'Ariel', 'idade':10, 'altura':1.32, 'peso':40}
]

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const index = pessoas[id];
    res.status(200).json({index});
});

router.get('/listar', (req,res) => {
        pessoa.find({}).then((pessoas) => {
        console.log(pessoas);
        res.status(200).json(pessoas);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post("/", (req,res) => {
    const pessoa = req.body;

    if(!pessoa.nome){
        res.status(400).json({message:"nome na requisição esta vazio"});
        return;
    }
    if(!pessoa.altura){
        res.status(400).json({message:"altura na requisição esta vazio"});
        return;
    }

    listaPessoas.push(pessoa); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/update:id", (req,res) => {
    const id = req.params.id;
    const pessoa = pessoas[id];
    
    console.log(pessoa);
    
    pessoas[id] = req.body;

    res.status(200).json(pessoas[id]);
});

router.delete("/del:id", (req,res) => {
    const id = req.params.id;
    delete pessoas[id];
    console.log(pessoas[id]);
    res.status(200).json(pessoas);
});

module.exports = router; //exportando o modelo pronto
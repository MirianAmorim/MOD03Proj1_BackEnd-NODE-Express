const express = require("express"); 
const router = express.Router();

let pessoas = [];

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listar', (req,res) => {
        res.status(200).json(pessoas);
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const index = pessoas[id];
    res.status(200).json({index});
});

router.post("/criar", (req,res) => {
    const pessoa = req.body;
    pessoas.push(pessoa); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/update/:id", (req,res) => {
    const id = req.params.id;
    const pessoa = pessoas[id];
    console.log(pessoa);
    pessoas[id] = req.body;
    res.status(200).json(pessoas[id]);
});

router.delete("/del/:id", (req,res) => {
    const id = req.params.id;
    delete pessoas[id];
    console.log(pessoas[id]);
    res.status(200).json(pessoas);
});


module.exports = router;
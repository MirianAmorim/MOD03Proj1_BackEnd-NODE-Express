const express = require("express"); 
const router = express.Router();

let filmes = [];

router.get('/', (req,res) => {
    res.status(200).json({message:"rota filmes ok"});
});

router.get('/listar', (req,res) => {
        res.status(200).json(filmes);
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const index = filmes[id];
    res.status(200).json({index});
});

router.post("/criar", (req,res) => {
    const filme = req.body;
    filmes.push(filme); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/update/:id", (req,res) => {
    const id = req.params.id;
    const filme = filmes[id];
    console.log(filme);
    filmes[id] = req.body;
    res.status(200).json(filmes[id]);
});

router.delete("/del/:id", (req,res) => {
    const id = req.params.id;
    delete filmes[id];
    console.log(filmes[id]);
    res.status(200).json(filmes);
});


module.exports = router;
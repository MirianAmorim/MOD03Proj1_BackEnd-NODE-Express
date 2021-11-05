const express = require("express"); 
const router = express.Router();

let musicas = [];

router.get('/', (req,res) => {
    res.status(200).json({message:"rota musicas ok"});
});

router.get('/listar', (req,res) => {
        res.status(200).json(musicas);
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const index = musicas[id];
    res.status(200).json({index});
});

router.post("/criar", (req,res) => {
    const musica = req.body;
    musicas.push(musica); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/update/:id", (req,res) => {
    const id = req.params.id;
    const musica = musicas[id];
    console.log(musica);
    musicas[id] = req.body;
    res.status(200).json(musicas[id]);
});

router.delete("/del/:id", (req,res) => {
    const id = req.params.id;
    delete musicas[id];
    console.log(musicas[id]);
    res.status(200).json(musicas);
});


module.exports = router;
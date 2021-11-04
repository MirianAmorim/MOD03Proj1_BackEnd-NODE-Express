const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req,res) => {
    res.status(200).json({message:"API"});
});

const pessoasRouter = require("./routers/pessoas");
app.use('/',pessoasRouter);

const musicasRouter = require("./routers/musicas");
app.use('/',musicasRouter);

const filmesRouter = require("./routers/filmes");
app.use('/',filmesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
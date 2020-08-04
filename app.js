const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//configurar o bodyparser, ele irá permitir enviar dados para a api e cadastrar produtos

app.use(bodyParser.json());

//configuração do MongoDB com o banco de dados online
mongoose.connect("mongodb+srv://marza:<>@produtos.uauvo.mongodb.net/<produtos>?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
        console.log("Banco de dados conectado");
    })
//Carregando o model de Produto
require('./models/Produto');
const Produto = mongoose.model("Produto");

//Endpoints

//cadastro
app.post("/produto", (req, res) => {
    var produto = new Produto({
        nome: req.body.nome,
        fabricante: req.body.fabricante,
        preco: req.body.preco,
    });

    produto.save()
        .then(() => {
            res.statusCode = 201;
            res.send();
        })
        .catch((err) => {
            if (err) {
                throw err;
            }
            //acontecer error ou falhar
            res.statusCode = 417;
            res.send();
        })
})

app.listen(8080, () => {
    console.log("API rodando!");
})
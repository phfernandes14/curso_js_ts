//Importa express
const express = require('express');

//Instancia Express
const app = express();

//Rota Inicial
app.get('/', (req, res)=>{
    res.send('Olá Mundo');
    console.log('+1 req')
});

//Rodar servidor
app.listen(3000, ()=>{
    console.log("Servidor executando em http://localhost:3000/")
})
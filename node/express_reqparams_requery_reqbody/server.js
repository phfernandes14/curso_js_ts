const express = require('express');

const app = express();

//Função para receber req body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            Sobrenome: <input type="text" name="sobrenome">
            <button>Enviar!</button>    
        </form>
    `);
    console.log('+1 req')
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    console.log(req.params)
    console.log(req.query.idade)
    res.send(req.params)
})

//Req Body
app.post('/',(req, res)=>{
    console.log(req.body)
    res.send(`O nome do cliente é : ${req.body.nome} e o sobrenome é ${req.body.sobrenome}`)//Acessar referenciando o nome do input
})

app.listen(3000, ()=>{
    console.log("Servidor executando em http://localhost:3000/")
})
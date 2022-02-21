require('dotenv').config()
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');


//conexao com mongodb

mongoose.connect(process.env.CONECTIONSTRING,
    {
        useNewUrlParser:true,

    })
.then(
    ()=>{
        console.log('MongoDB: Conexão feita com sucesso');
        app.emit('ok')
    }
)
.catch((err)=>{
    console.log(`MongoDB: Conexão mal sucedida (error : ${err})`)
})


const app = express();
const routes = require('./routes')

const meuMiddleware = require('./src/middlewares/middleware')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
//Acionando middeware de forma global
app.use(meuMiddleware)


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log("Servidor executando em http://localhost:3000/")
    })
})

const express = require('express');
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

const app = express();
const routes = require('./routes')


app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
//Acionando middeware de forma global
app.use(meuMiddleware)


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.listen(3000, ()=>{
    console.log("Servidor executando em http://localhost:3000/")
})
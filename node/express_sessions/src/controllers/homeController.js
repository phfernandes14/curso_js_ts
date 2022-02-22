const session = require("express-session");
const HomeModel = require("../models/HomeModel");

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'uma descricao de teste'
})
.then(dados => console.log(dados))
.catch((err)=>console.log(err))

exports.paginaInicial = (req, res, next) =>{
    session.usuario = {nome: 'Luiz', logado: true}
    console.log(session.usuario)
    res.render('index');
    console.log('+1 req');
}

exports.trataPost = (req, res)=>{
    res.send(req.body)
};
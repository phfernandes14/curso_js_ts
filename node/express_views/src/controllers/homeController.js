exports.paginaInicial = (req, res) =>{
    res.render('index');
console.log('+1 req');
}

exports.trataPost = (req, res)=>{
    res.send("Nova rota de post")
};
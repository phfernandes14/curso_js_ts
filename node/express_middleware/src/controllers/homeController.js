exports.paginaInicial = (req, res, next) =>{
    res.render('index');
    console.log('+1 req');
}

exports.trataPost = (req, res)=>{
    res.send(req.body)
};
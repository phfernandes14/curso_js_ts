exports.paginaInicial = (req, res) =>{
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        Sobrenome: <input type="text" name="sobrenome">
        <button>Enviar!</button>    
    </form>
`);
console.log('+1 req');
}

exports.trataPost = (req, res)=>{
    res.send("Nova rota de post")
};
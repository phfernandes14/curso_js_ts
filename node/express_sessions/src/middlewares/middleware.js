module.exports = (req,res, next) => {
    console.log();
    console.log("Passei no middleware");
    console.log(`Usuário postou um nome: ${req.body.cliente}`);
    next(); 
}
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

/*
function teste() {
    console.log('Isso é um teste.')
}
teste()
teste()
 */

function getNaRotaRaiz(requisicao, resposta) {
    console.log("Recebi um get na rota: \"/\"")
    resposta.render('cadastroUsuario')
    //resposta.send('Teste')
}

const rotaRaiz = app.route("/")
rotaRaiz.get( getNaRotaRaiz )

const rotaCadastroUsuario = app.route("/cadastrar")
rotaCadastroUsuario.post( (requisicao, resposta) => {
    console.log("Recebi um post na rota: cadastrar");
    let name = "Nome: "+requisicao.body.nome;
    console.log(name);
    resposta.send('RECEBIDO -> '+name)
} )

/*function ola() {
    console.log('Servidor iniciado');
}
app.listen(8080, ola)*/
app.listen(8080, () => {console.log('Servidor iniciado');})

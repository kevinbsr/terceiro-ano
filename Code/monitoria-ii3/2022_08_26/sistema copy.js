const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.route('/')
.get((req, res) => {
  res.render('cadastro')
})
.post((req, res) => {
    console.log(req.body.nome)
    console.log(req.body.nascimento)
    console.log(req.body.email)
    console.log(req.body.senha)
    console.log(req.body.confsenha)
    console.log(req.body.endereco)
    console.log(req.body.numero)
    console.log(req.body.cidade)
    console.log(req.body.estado)

    const nomeArquivo = req.body.email + '.txt'
    fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))

    res.render('sucesso', { nome: req.body.nome, nascimento: req.body.nascimento, email: req.body.email, senha: req.body.senha, confsenha: req.body.consenha, endereco: req.body.endereco, numero: req.body.numero, cidade: req.body.cidade, estado: req.body.estado })
})

app.listen(3000, () => {console.log('servidor funcionando...')})
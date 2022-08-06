const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app
  .route('/')
  .get((request, response) => {
    response.render('cadastro')
  })

  .post((req, res) => {
    res.render('sucesso')
    console.log('Nome do usuário: ' + req.body.nome) // imprime o valor do campo nome
    console.log('Nascimento do usuário: ' + req.body.nascimento) // imprime o valor do campo nascimento
    console.log('CPF do usuário: ' + req.body.cpf) // imprime o valor do campo cpf
    console.log('Sexo do usuário: ' + req.body.sexo) // imprime o valor do campo sexo
    console.log('Estado civil do usuário: ' + req.body.estadoCivil) // imprime o valor do campo estadoCivil
    console.log('Email do usuário: ' + req.body.email) // imprime o valor do campo email
    console.log('Senha do usuário: ' + req.body.senha) // imprime o valor do campo senha
    console.log()
  })

app.listen(4000, () => console.log('Servidor rodando...'))

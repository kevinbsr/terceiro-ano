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
  res.render('sucesso')
  console.log(req.body.nome)
  console.log(req.body.email)
  console.log(req.body.bornDate)
  console.log(req.body.cpf)
  console.log(req.body.tel)
  console.log(req.body.city)
  console.log(req.body.state)
  console.log(req.body.country)
  console.log(req.body.senha)

  const nomeArquivo = req.body.email + '.txt'
  fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))

  res.render('sucesso', { nome: req.body.nome, email: req.body.email, DataDeNascimento: req.body.bornDate, cpf: req.body.cpf, tel: req.body.tel, city: req.body.tel, state: req.body.state, country: req.body.country, senha: req.body.senha })
})

app.listen(8080, () => console.log('Servidor rodando...'))
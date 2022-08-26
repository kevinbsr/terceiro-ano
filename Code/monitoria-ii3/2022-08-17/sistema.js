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
  console.log(req.body.nome);
  console.log(req.body.email);
  console.log(req.body.senha);
})

app.listen(8080, () => console.log('Servidor rodando...'))
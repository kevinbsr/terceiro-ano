const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('soma')
})

app.get('/operacao', (req, res) => {
  console.log('n1=' + req.body.n1)
  console.log('n2=' + req.body.n2)
  console.log('NOME=' + req.body.nome)
  result = parseFloat(req.body.n1) + parseFloat(req.body.n2)
  if (isNaN(result)) {
    result = 'Valores inválidos.'
  } else {
    result = req.body.nome + ', sua conta deu: ' + result
  }
  res.render('soma', { x: result })
})
app.listen(1342)

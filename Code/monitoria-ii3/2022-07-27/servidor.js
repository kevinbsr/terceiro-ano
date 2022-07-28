const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('conta')
})
/*
<% if () {%>
    <h1>uma</h1>
    <% } else {%>
        <h1>outra</h1>
        <% } %>
        */
app.post('/', (req, res) => {
  const n1 = req.body.n1
  const n2 = req.body.n2
  const resultado = parseInt(n1) + parseInt(n2)
  res.render('soma', { n1, n2, resultado })
})

function soma(a, b) {
  return parseFloat(a) + parseFloat(b)
}

function subtracao(a, b) {
  return parseFloat(a) - parseFloat(b)
}

function multiplicacao(a, b) {
  return parseFloat(a) * parseFloat(b)
}

function divisao(a, b) {
  return parseFloat(a) / parseFloat(b)
}

app.post('/operacao', (req, res) => {
  console.log('n1=' + req.body.n1)
  console.log('n2=' + req.body.n2)
  let result
  // consertar daqui
  if (operacao == 'soma') {
    result = soma(req.body.n1, req.body.n2)
  } else if (operacao == 'subtracao') {
    result = subtrair(req.body.n1, req.body.n2)
  } else if (operacao == 'multiplicacao') {
    result = multiplicar(req.body.n1, req.body.n2)
  } else if (operacao == 'divisao') {
    result = dividir(req.body.n1, req.body.n2)
  }

  //soma

  document.getElementById('resultado').innerHTML = result
  console.log(result)
  //ate aqui

  if (isNaN(result)) {
    result = 'Valores inválidos.'
  } else {
    result = 'Resultado = ' + result
  }

  res.render('soma', { x: result })
})

app.listen(8080)

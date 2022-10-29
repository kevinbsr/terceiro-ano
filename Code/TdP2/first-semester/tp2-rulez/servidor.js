const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (requisicao, resposta) => {
  resposta.render('conta', { result: '' })
})

app.get('/operacoes', (req, res) => {
  console.log(req.query.operacao)

  if (req.query.operacao == 'soma') {
    let soma = parseFloat(req.query.N1) + parseFloat(req.query.N2)
    console.log('Resultado: ' + soma)
    res.render('conta', { result: soma })
  } else if (req.query.operacao == 'subtracao') {
    let subtracao = parseFloat(req.query.N1) - parseFloat(req.query.N2)
    console.log('Resultado: ' + subtracao)
    res.render('conta', { result: subtracao })
  } else if (req.query.operacao == 'multiplicacao') {
    let multiplicacao = parseFloat(req.query.N1) * parseFloat(req.query.N2)
    console.log('Resultado: ' + multiplicacao)
    res.render('conta', { result: multiplicacao })
  } else if (req.query.operacao == 'divisao') {
    let divisao = parseFloat(req.query.N1) / parseFloat(req.query.N2)
    console.log('Resultado: ' + divisao)
    res.render('conta', { result: divisao })
  } else if (req.query.operacao == 'fatorial') {
    if (req.query.N1 == 0) {
      result = 1
    }
    var resp = req.query.N1
    while (req.query.N1 > 2) {
      resp *= --req.query.N1
      result = resp
    }
    res.render('conta', { result: result })
  } else {
    console.log('Operação inválida')
    res.render('conta', { result: 'Operação inválida' })
  }
})

console.log('Servidor funcionando...')
app.listen(8080)

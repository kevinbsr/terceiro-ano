/* Servidor JS */

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (requisicao, resposta) => {
  resposta.render('conta', { soma: 0 })
})

app.get('/operacoes', (req, res) => {
  //result = parseFloat(n1.value) + parseFloat(n2.value);
  //document.getElementById("resultado").innerHTML = result;

  if (req.query.operacao == 'soma') {
    let soma = parseFloat(req.query.N1) + parseFloat(req.query.N2);
    console.log('Resultado: ' + soma);
    res.render('conta', {result: soma});
  } else if (req.query.operacao = 'subtracao') {
    let subtracao = parseFloat(req.query.N1) - parseFloat(req.query.N2);
    console.log('Resultado: ' + subtracao);
    res.render('conta', {result: subtracao})
  } else if (req.query.opercao = 'multiplicacao') {
    let multiplicacao = parseFloat(req.query.N1) * parseFloat(req.query.N2)
    console.log('Resultado: ' + multiplicacao);
    req.render('conta', {result: multiplicacao})
  } else if (req.query.operacao = 'divisao') {
    let divisao = parseFloat(req.query.N1) / parseFloat(req.query.N2)
    console.log('Resultado: ' + divisao)
    req.render('conta', {result: divisao})
  }
})

console.log('Servidor funcionando...')
app.listen(8888)

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
  console.log('/operacoes');
  
  if ( == 'soma') {
    let soma = parseFloat(req.query.N1) + parseFloat(req.query.N2)
    console.log('Resultado: ' + soma)
    res.render('conta', { soma: soma })
  } else if (req.query.operacao == 'subtracao') {
    let sub = parseFloat(req.query.N1) - parseFloat(req.query.N2)
    console.log('Resultado: ' + sub)
    res.render('conta', { subtracao: sub })
  }
})

console.log('Servidor funcionando...')
app.listen(8080)

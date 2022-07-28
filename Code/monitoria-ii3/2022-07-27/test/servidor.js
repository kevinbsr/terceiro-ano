const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (requisicao, resposta) => {
  resposta.render('teste')
})
/*function soma() {
    result = parseFloat(n1.value) + parseFloat(n2.value);
    document.getElementById("resultado").innerHTML = result;
}*/
app.post('/operacoes', (req, res) => {
  //result = parseFloat(n1.value) + parseFloat(n2.value);
  let resultSoma = parseFloat(req.query.N1) + parseFloat(req.query.N2)
  console.log('Resultado: ' + result)
  
  //document.getElementById("resultado").innerHTML = result;
  res.render('conta', { soma: result })
})
console.log('Servidor funcionando...')
app.listen(8080)

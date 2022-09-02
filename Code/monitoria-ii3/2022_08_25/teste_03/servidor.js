const fs = require('fs')
const express = require('express')
const { response } = require('express')
const app = express()
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')

function fatorial(n){
  if (n == 0){
    return 1
  } else {
    var resp = n
    while (n > 2){
      resp *= --n
      result = resp
    }
    return resp
  }
}

app.get('/', (request, response) => {
  response.render('operacoes', { a: '', b: '', name: '' })
})

app.route('/log')
  .get((req, res) => {
    res.render('log')
  })
  .post((req, res) => {
    const nomeArquivo = req.body.name+'.txt'
    if (fs.existsSync(nomeArquivo)) {
      const leArquivoBuffer = fs.readFileSync(nomeArquivo)
      console.log(leArquivoBuffer)
      const leArquivoString = leArquivoBuffer.toString()
      console.log(leArquivoString)
      const jason13 = JSON.parse(leArquivoString)
      console.log(jason13)
      const resultado = 'Operação '+jason13.op + ': '+jason13.x
      res.render('operacoes', {x: resultado, a: jason13.n1, b: jason13.n2, name: jason13.name})
    } else {
      res.render('log', { x: 'Arquivo não encontrado: '+req.body.nome })
    }
  })

app.route('/operacao')
  .get((req, res) => {
    res.render('operacoes', { a: '', b: '', name: '' })
  })
  .post((req, res) => {
    console.log(req.body)
    console.log('N1 = ' + req.body.n1)
    console.log('N2 = ' + req.body.n2)
    console.log('Operação = ' + req.body.op)
    console.log('Nome = ' + req.body.name)
    let result, conta
    if (req.body.op === '+') {
      conta = 'soma'
      result = parseFloat(req.body.n1) + parseFloat(req.body.n2)
    } else if (req.body.op === '-') {
      conta = 'subtração'
      result = parseFloat(req.body.n1) - parseFloat(req.body.n2)
    } else if (req.body.op === '*') {
      conta = 'multiplicação'
      result = parseFloat(req.body.n1) * parseFloat(req.body.n2)
    } else if (req.body.op === '/') {
      conta = 'divisão'
      result = parseFloat(req.body.n1) / parseFloat(req.body.n2)
    } else {
      result = 'Operação Invalida.'
      req.body.x = result
    }
    if (isNaN(result)) {
      result = 'Valores inváidos.'
    } else {
      result = req.body.name + ', sua ' + conta + ' deu: ' + result
    }
    console.log(req.body)
    const nomeArquivo = req.body.nome+'.txt'
    fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))
    res.render('sucesso', { x: result, a: req.body.n1, b: req.body.n2, name: req.body.name })
  })

app.route('/fatorial')
  .get((req, res) => {
    console.log('n1 via get = ' + req.body.n1)
    let valor = parseInt(req.query.n1)
    console.log('Operação = fatorial')
    let result = fatorial(valor)
    if (isNaN(result)) {
      result = 'Valores inválidos.'
    } else {
      result = 'Anônimo, seu fatorial deu: ' + result
    }
    res.render('operacoes', { x: result, a: valor, b: '', name: '' })
  })
  .post((req, res) => {
    let valor
    if (req.body.n1 === '') {
      valor = parseInt(req.body.n2)
    } else {
      valor = parseInt(req.body.n1)
      console.log('N1 = ' + req.body.n1)
      console.log('Nome = ' + req.body.n2)
      console.log('Operação = fatorial')
      let result = fatorial(valor)
      if (isNaN(result)) {
        result = 'Valores inválidos.'
      } else {
        result = req.body.name + ', seu fatorial deu: ' + result
      }
      res.render('operacoes', { x: result, a: req.body.n1, b: req.body.n2, name: req.body.name })
    }
  })
  
app.listen(8080, () => {console.log('Servidor rodando!')})
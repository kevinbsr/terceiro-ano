const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views/public'))

function fatorial(n) {
  if (n == 0) {
    return 1;
  }
  var resp = n;
  while (n > 2) {
    resp *= --n;
    result = resp;
  }
  return resp;
}

app.get('/', (request, response) => {
  response.render('operacoes', { a: '', b: '', nome: '' })
})

function mostraArquivo(nome) {
  const nomeArquivo = 'dados/' + nome + '.json'
  if (fs.existsSync(nomeArquivo)) {
    const leArquivoBuffer = fs.readFileSync(nomeArquivo);
    console.log(leArquivoBuffer);
    const leArquivoString = leArquivoBuffer.toString();
    console.log(leArquivoString);
    const jason13 = JSON.parse(leArquivoString);
    console.log(jason13);
    const resultado = 'Operação ' + jason13.op + ': ' + jason13.x
    let resultJSON = { x: resultado, a: jason13.n1, b: jason13.n2, nome: jason13.nome }
    return resultJSON
  } else {
    return 'Arquivo não encontrado: ' + nome
  }
}
app.route('/log')
.get((req, res) => {
  let registros = []
  fs.readdirSync('dados/').forEach(file => {
    file = file.replace('.json', '')
    registros.push(file)
  })
  console.log(registros)
  res.render('log', { logs: registros })
})
.post((req, res) => {
  let resultado = mostraArquivo(req.body.nome)
  if (typeof resultado === 'string') {
    res.render('log', { x: resultado })
  } else {
    res.render('operacoes', resultado)
  }
  
})

app.route('/editar')
.get((req, res) => {
  let resultado = mostraArquivo(req.query.nome)
  if (typeof resultado === 'string') {
    res.render('log', { x: resultado })
  } else {
    resultado.editar = true
    console.log(resultado)
    res.render('operacoes', resultado)
  }
  
})

app.route('/ver')
.get((req, res) => {
  let resultado = mostraArquivo(req.query.nome)
  if (typeof resultado === 'string') {
    res.render('log', { x: resultado })
  } else {
    res.render('ver', resultado)
  }
  
})

app.route('/apagar')
.get((req, res) => {
  const nomeArquivo = 'dados/' + req.query.nome + '.json'
  if (fs.existsSync(nomeArquivo)) {
    fs.rmSync(nomeArquivo)
  }
  let registros = []
  fs.readdirSync('dados/').forEach(file => {
    file = file.replace('.json', '')
    registros.push(file)
  })
  console.log(registros)
  res.render('log', { logs: registros })
})

app.route('/operacao')
.get((req, res) => {
  res.render('operacoes', { a: '', b: '', nome: '' })
})
.post((req, res) => {
  // JSON - JavaScript Object Notation
  console.log(req.body)
  console.log("n1=" + req.body.n1)
  console.log("n2=" + req.body.n2)
  console.log("Operação=" + req.body.op)
  console.log("NOME=" + req.body.nome)
  
  let result, conta
  if (req.body.op === '+') {
    conta = 'soma'
    result = parseFloat(req.body.n1) + parseFloat(req.body.n2)
  } else if (req.body.op === '-') {
    conta = 'subtração'
    result = parseFloat(req.body.n1) - parseFloat(req.body.n2)
  } else if (req.body.op === 'x') {
    conta = 'multiplicação'
    result = parseFloat(req.body.n1) * parseFloat(req.body.n2)
  } else if (req.body.op === '/') {
    conta = 'divisão'
    result = parseFloat(req.body.n1) / parseFloat(req.body.n2)
  } else
  result = "Operação inválida"
  
  req.body.x = result
  if (isNaN(result)) {
    result = "Valores inválidos."
  } else {
    result = req.body.nome + ", sua " + conta + " deu: " + result
  }
  console.log(req.body)
  const nomeArquivo = 'dados/' + req.body.nome + '.json'
  //const nomeArquivo = 'operacao.json'
  fs.writeFileSync(nomeArquivo, JSON.stringify(req.body))
  
  res.render('sucesso', { x: result, a: req.body.n1, b: req.body.n2, nome: req.body.nome })
})

app.route('/fatorial')
.get((req, res) => {
  console.log("n1 via get=" + req.query.n1)
  let valor = parseInt(req.query.n1)
  console.log("Operação=fatorial")
  let result = fatorial(valor)
  
  if (isNaN(result)) {
    result = "Valores inválidos."
  } else {
    result = "Anônimo, seu fatorial deu: " + result
  }
  
  res.render('operacoes', { x: result, a: valor, b: '', nome: '' })
})
.post((req, res) => {
  let valor
  if (req.body.n1 === '')
  valor = parseInt(req.body.n2)
  else
  valor = parseInt(req.body.n1)
  console.log("n1=" + req.body.n1)
  console.log("NOME=" + req.body.nome)
  console.log("Operação=fatorial")
  let result = fatorial(valor)
  
  if (isNaN(result)) {
    result = "Valores inválidos."
  } else {
    result = req.body.nome + ", seu fatorial deu: " + result
  }
  res.render('operacoes', { x: result, a: req.body.n1, b: req.body.n2, nome: req.body.nome })
})

app.listen(1342, () => { console.log("Servidor em http://localhost:1342") })
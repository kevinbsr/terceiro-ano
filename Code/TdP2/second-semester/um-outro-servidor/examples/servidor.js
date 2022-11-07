/* configuracoes basicas iniciais */
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

/* funcao para o fatorial */
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

app.route('/operacao')
.get((req, res) => {
	res.render('operacoes', { a: '', b: '', nome: '' })
})

.post((req, res) => {
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
	if (isNaN(result)) {
		result = "Valores inválidos."
	} else {
		result = req.body.nome + ", sua "+conta+" deu: " + result
	}
	res.render('operacoes', { x: result, a: req.body.n1, b: req.body.n2, nome: req.body.nome })
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
// para indentar o código no VS Code: Ctrl + Shift + i

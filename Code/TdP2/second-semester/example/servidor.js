const arquivos = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.static('views/public'));

app.get("/", (requisicao, resposta) => {
    let resultadoVazio = {}
    resposta.render("umaconta", {conta: resultadoVazio});
});

/*function soma() {
    result = parseFloat(n1.value) + parseFloat(n2.value);
    document.getElementById("resultado").innerHTML = result;
}*/
function fatorial(n) {
    if (n == 0) {
     return 1;
    }
    var resp = n;
    while (n > 2) {
     resp *= --n;
     result = resp;
    }
    return result;
   }

app.get("/operacoes", (req, res) => {
    //result = parseFloat(n1.value) + parseFloat(n2.value);
    const nome = req.query.nome
    console.log("Recebi uma requisição de conta de ", nome);
    const n1 = parseFloat(req.query.N1)
    const n2 = parseFloat(req.query.N2)
    const op = req.query.op
    let result
    if (op == '+')
        result = n1 + n2
    if (op == '-')
        result = n1 - n2
    if (op == 'x')
        result = n1 * n2
    if (op == '/')
        result = n1 / n2
    let nomeArq = "dados/"+nome+".txt"
    //let resultadoArq = {N1: n1, N2: n2, op: op, resultado: result}
    //resultadoArq = JSON.stringify(resultadoArq)
   
    req.query.resultado = result
    let resultadoArq = JSON.stringify(req.query)
   
    arquivos.writeFileSync(nomeArq, resultadoArq)
    res.render("umaconta", {conta: req.query});
});

const rotaFatorial = app.route("/fat");
rotaFatorial.post((req, res) => {
    const n1 = req.body.N1
    const result = fatorial(n1)
    res.render("conta", {conta: result});
})

const rotaContasFeitas = app.route("/contas");
rotaContasFeitas.get((req, res) => {
    let contasGravadas = [];
    arquivos.readdirSync("./dados/").forEach(file => {
      if (file.includes(".txt")) {
        contasGravadas.push(file);
      }
    });
    console.log(contasGravadas);
    res.render("lista", {contas: contasGravadas});
})

const rotaUmaConta = app.route("/umaconta");
rotaUmaConta.get((req, res) => {
  const nomeArq = "dados/"+req.query.nome
  const conteudoArq = arquivos.readFileSync(nomeArq)
  const stringArq = conteudoArq.toString()
  const objArq = JSON.parse(stringArq)
  res.render("umaconta", {conta: objArq});
})

const rotaDelete = app.route("/apagaconta");
rotaDelete.get((req, res) => {
    const arq = "dados/"+req.query.nome;
    arquivos.unlink(arq, () => {
        console.log("Arquivo apagado: "+req.query.nome);
    } );
    res.redirect("/contas");
})

// revisão sobre JSON
/*function objeto() {
    let nome = "Fulano"
    console.log(nome);
    console.log(typeof nome);
    let obj = {}
    console.log(typeof obj);
    obj.nome = "Cesar"
    console.log("Mostrando parte do obj: ");
    console.log("obj (",typeof obj,"):" , obj);
    console.log("obj.nome (",typeof obj.nome,"):" , obj.nome);
    obj.idade = 40
    console.log(obj);
    let obj2 = {nome: "Aline", idade: 45}
    console.log(obj2.nome);
}
objeto()*/

porta = 8080
console.log("Servidor funcionando na porta "+porta);
app.listen(porta);
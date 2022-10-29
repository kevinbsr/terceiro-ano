const arquivos = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.route('/')
.get( (req, res) => {
    res.render('cadastro')
})

.post((req,res) => {
    res.render('sucesso')
    arquivos.writeFileSync(req.body.email+".txt", JSON.stringify(req.body))
})

const rotaCadastroSalvo = app.route("/cadastros");
rotaCadastroSalvo.get((req, res)=> {
    let cadastrosSalvos = [];
    arquivos.readdirSync(".").forEach(file => {
        if(file.includes(".txt")){
            cadastrosSalvos.push(file);
        }
    })
    console.log(cadastrosSalvos)
    res.render('cadastrossalvos', {cadastros: cadastrosSalvos})
})

const rotaCadastro = app.route("/cadastro2");
rotaCadastro.get((req, res) =>{
    const nomeArquivo = req.body.nome
    const conteudoArquivo = arquivos.readFileSync(nomeArquivo)
    const stringArquivo = conteudoArquivo.toString()
    const objArquivo = JSON.parse(stringArquivo)
    res.render('cadastro2', {cadastro: objArquivo})
})


app.listen(8080, () => console.log('Servidor trabalhando em localhost:8080'))
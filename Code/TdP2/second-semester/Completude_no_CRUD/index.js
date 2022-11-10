const fs = require('fs')
const express = require('express')
const { stringify } = require('querystring')
const app = express()
app.use(express.urlencoded ({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.static('public'))

// Create
app.route('/')
  .get((req, res) => {
    res.render('cadastro')
  })
  .post((req, res) => {
    res.render('sucesso')
    fs.writeFileSync(req.body.email+'.txt', JSON.stringify(req.body))
  })

  // Read
  const rotaCadastroSalvo = app.route('/cadastros')
  rotaCadastroSalvo.get((req, res) => {
      let cadastrosSalvos = []
      fs.readdirSync('.').forEach(file => {
        if(file.includes('.txt')){
          cadastrosSalvos.push(file)
        }
      })
      console.log(cadastrosSalvos);
      res.render('cadastrossalvos', { cadastros: cadastrosSalvos})
    })

  const rotaCadastro = app.route('/cadastro')
    rotaCadastro.get((req, res) =>{
      const nomeArquivo = req.query.nome
      const conteudoArquivo = fs.readFileSync(nomeArquivo)
      const stringArquivo = conteudoArquivo.toString()
      const objArquivo = JSON.parse(stringArquivo)
      res.render('cadastro', {cadastro: objArquivo})
    })

  // Update
  const rotaVisuzalizar = app.route('/visualizar')
    rotaVisuzalizar.get((req, res) => {
      const arqEmail = req.query.nome
      const conteudoEmail = fs.readFileSync(arqEmail)
      const emailString = conteudoEmail.toString()
      const emailObjeto = JSON.parse(emailString)
      res.render('visualizar', {cadastro: emailObjeto})
    })

  // Delete
  const rotaDeletarCadastro = app.route('/deletarCadastro')
    rotaDeletarCadastro.get((req, res) => {
      const nomeArquivo = req.query.nome
      console.log(nomeArquivo);
      fs.unlink(nomeArquivo, () => {console.log('Arquivo apagado.')})
      res.redirect('cadastros')
    })

app.listen(4000, () => console.log('Server running at http://localhost:4000/'))
const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


// CREATE
app
  .route('/')
  .get((req, res) => {
    res.render('cadastro')
  })

  .post((req, res) => {
    res.render('sucesso')
    fs.writeFileSync(req.body.email+'.txt', JSON.stringify(req.body))
  })
// READ
  const rotaCadastroSalvo = app.route('/cadastros')
    rotaCadastroSalvo.get((req, res) => {
      let cadastrosSalvos = []
      fs.readdirSync('.').forEach(file => {
        if(file.includes('.txt')){
          cadastrosSalvos.push(file)
        }
      })
      console.log(cadastrosSalvos);
      res.render('cadastrosSalvos'), {cadastros: cadastrosSalvos}
    })

  const rotaCadastro = app.route('/cadastro2')
    rotaCadastro.get((req, res) => {
      const nomeArquivo = req.body.nome
      const conteudoArquivo = fs.readFileSync(nomeArquivo)
      const stringArquivo = conteudoArquivo.toString()
      const objArquivo = JSON.parse(stringArquivo)
      res.render('cadastro2', {cadastro: objArquivo})
    })
// UPDATE
  rotaDeletarCadastro.get((req, res) => {
    
  })

// DELETE



app.listen(4000, () => console.log('Servidor rodando...'))
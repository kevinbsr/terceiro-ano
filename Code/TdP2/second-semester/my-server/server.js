const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + 'views/public'))

app.get('/', (request, response) => {
  response.render('home')
})

app.route('/cadastrar')
.get((req, res) => {

})text

app.listen(4444, () => console.log('Running server...'))
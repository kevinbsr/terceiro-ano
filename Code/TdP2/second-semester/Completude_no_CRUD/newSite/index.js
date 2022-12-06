const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.route('/')
  .get((req, res) => {
    res.render('home')
  })


app.listen(3000, () => {console.log('Server running at 3000')})
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send({ name: 'Wagner',  idade: 37 })
})

app.get('/users', (req, res) => {
    res.send({ id: 1, name: 'Wagner',  idade: 37 })
})

app.get('/page', (req, res) => {
    res.render('page', { name: 'Wagner' })
})

app.listen(5000, err => {
    console.log(err)
})
const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.send({name: 'Marvin Lemos', company: 'marvinlemos.net'})
})

app.get('/page', (req, res) => {
    res.render('page', {name: 'marvinlemos.net'})
})


app.get('/users', (req, res) => {
    res.send(
        [
            {name: 'Marvin Lemos', company: 'marvinlemos.net'},
            {name: 'MP', company: 'Lemos Corp.'},
            {name: 'LL', company: 'uespi'}
        ]
    )
})

app.listen(3000, err=>{
    console.log(err)
})
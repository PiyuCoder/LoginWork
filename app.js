const client = require('./database')
const express = require('express')
const path = require('path')
const PORT = 3000 || process.env.PORT
const app = express()
const bodyParser = require('body-parser')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static("./pictures"));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))




app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/user', client.getUser, (req, res)=>{

    
})



app.post('/user', client.insertUser)


app.listen(PORT, ()=>{
    console.log(`Running on ${PORT}`)
})

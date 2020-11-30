//Loading Express & Providing access to pages

const express = require ('express')
const path =require('path')
const data = require('./data/students')

//creating express app

const app =express()

//View Engine - EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Mount Routes

app.get('/home', (req, res)=>{
    res.render(`home`)
})

app.get('/student', (req, res)=>{
    res.render(`student-data`,{students: data.getAll()
    })
})
app.get('/teacher', (req, res)=>{
    res.render(`teacher`)
})

app.get('/contactus', (req, res)=>{
    res.render(`contactus`)
})
//Redirect

app.get('/', (req, res)=>{
    res.redirect('/home')
})

//404- Page Not Found


//Listening for port 3000

app.listen(3000, function(){
    console.log('listening to port 3000, start loading stuff')
})

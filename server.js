//Loading Express & Providing access to pages

const express = require ('express')
const path =require('path')
const data = require('./data/students')

//creating express app

const app =express()

//View Engine - EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware and static files
app.use(express.static('public'))

//Mount Routes

app.get('/home', (req, res)=>{
    res.render(`home`, {title: "Home"})
})

app.get('/student', (req, res)=>{
    res.render(`student-data`, {students: data.getAll()
    })
})
app.get('/teacher', (req, res)=>{
    res.render(`teachers`, {teachers: data.getAll()
    })
})

app.get('/contactus', (req, res)=>{
    res.render(`contactus`, {title: 'Contact Us'})
})
//Redirect

app.get('/', (req, res)=>{
    res.redirect('/home')
})

//404- Page Not Found
app.use((req, res)=>{
    res.status(404).render('404', { title: 'Page Not Found'})
})

//Listening for port 3000

app.listen(3000, function(){
    console.log('listening to port 3000, start loading stuff')
})

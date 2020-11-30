//Loading Express

const express = require ('express')

//creating express app

const app =express()

//Sending 

app.get('/', (req, res)=>{
    res.send(`<h1>Student Home Page</h1>`)
})

//Listening

app.listen(3000, function(){
    console.log('listening to port 3000, start loading stuff')
})

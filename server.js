const express = require("express")
const app = express() 

app.set('view engine','ejs') 

app.get('/' , (req,res) =>{
    // console.log("Hello Backend")
    // res.status(500).send("Hello Backend") // status has highest priority
    // res.status(200).send({error : "error message"})
    // res.json({express : "learning express"})
    // res.send("hello world")
    res.render("index",{textf : "World"})
})  

const userRoute = require('./routes/user')
app.use('/user',userRoute)
 
app.listen(3000);
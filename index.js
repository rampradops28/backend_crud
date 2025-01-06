import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import router from './routes/userRoute.js'
import cors from 'cors';
import jwt from 'jsonwebtoken'

const app = express(); 
// const user = [
//     {
//         name : "ram",
//         email : "rampradop@gmail.com"
//     },
//     {
//         name: "ramya",
//         email : "ramya@gmail.com"
//     }
// ]

//middleware for passing the json request to body
app.use(bodyParser.json()); //Always return json based values
app.use(cors()) ;
dotenv.config();


const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGODB_URL;

app.use('/api/user',router)

// app.use('/', (req,res) => {
//     const username = req.body.username;
//     const user = {name : username};
//     const accessToken = jwt.sign(user,'gfgfgfgfgfggfgf');

//     res.json({accessToken : accessToken})
// })

mongoose
    .connect(MONGOURL)
    .then(() => {
    console.log("Connection Successful")
    app.listen(PORT, () => {
        console.log(`Port running Successfully at port: ${PORT}`)
    });
}) 



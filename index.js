import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import router from './routes/userRoute.js'

const app = express();

//middleware for passing the json request to body
app.use(bodyParser.json()); //Always return json based values

app.use(express.urlencoded({ extended: true }));
dotenv.config()


const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGODB_URL;

app.use('/api/user',router)

mongoose
    .connect(MONGOURL)
    .then(() => {
    console.log("Connection Successful")
    app.listen(PORT, () => {
        console.log(`Port running Successfully at port: ${PORT}`)
    });
})



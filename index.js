import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRoutes from './routes/posts.js';
const app = express();
app.use(cors())

app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))
app.use('/posts',postsRoutes)
const CONNECTION_URL='mongodb+srv://jigarf504:hONaOwbLaYHkfiQR@cluster0.kpcxqic.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        () => app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`)) 
    ).catch((error) => console.error(error.message))

//mongoose.set('useFindAndModify',false)

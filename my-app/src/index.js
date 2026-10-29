import express from "express";
import mongoose from "mongoose";
import apiRoute from "./routes/index.js";

const app= express();

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1/playground')
.then(()=>{console.log("connect successfully")})
.catch((e)=>console.log(e.message));


app.use("/",apiRoute);
app.listen(3000,()=>{
    console.log("listening");
});




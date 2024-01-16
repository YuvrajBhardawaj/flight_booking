import express from "express";
import mongoose from "mongoose";
import {getFlights} from './db.js'
import dotenv from 'dotenv'
const app=express()
app.use(express.json())
dotenv.config()
const uri=process.env.URI
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db=mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
})
app.post('/api/home',async(req,res)=>{
    const {from,to,arrival,departure,fare}=req.body
    const data=await getFlights(from,to)
    console.log(data)
    res.send(data)
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is Online")
})
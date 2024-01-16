import express from "express";
import mongoose from "mongoose";
import {getFlights} from './db.js'
const app=express()
app.use(express.json())
const uri='mongodb+srv://yuvrajbhardawaj31018:yuvraj123@cluster0.ftqitxg.mongodb.net/flights'
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
app.listen(3000,()=>{
    console.log("Server is Online")
})
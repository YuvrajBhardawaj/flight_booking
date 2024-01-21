import express from "express";
import mongoose from "mongoose";
import {bookNow, getFlights, SignIn, SignUp} from './db.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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
app.post('/api/login',async(req,res)=>{
    const {email,password}=req.body
    const data=await SignIn(email,password)
    if(data.success){
        const token=jwt.sign({id:data.id},'MyKey',{expiresIn:'1h'})
        res.cookie('token',token,{httpOnly:true,maxAge:60*1000})
        res.send({success:"true",message:"Login Successfull"})
    }
    else
        res.send(data)
})
app.post('/api/signup',async(req,res)=>{
    let {name,email,password,phone}=req.body
    try{
        password=await bcrypt.hash(password,10)
        const data=await SignUp(name,email,password,phone)
        res.send(data)
    }
    catch(err){
        res.send({success:false, message:"Registration Failed"})
    }
})
app.post('/api/booking',async(req,res)=>{
    const {id,userid,name,age,phone,aadhar,date,rate}=req.body
    const data=await bookNow(id,userid,name,age,phone,aadhar,date,rate)
    res.send(data)
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is Online")
})
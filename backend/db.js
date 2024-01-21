import {travelDestination, users, booking} from "./models.js"
import bcrypt from 'bcrypt'
export async function getFlights(from,to){
    try{
        const data=await travelDestination.find({from:from, to:to})
        return data
    }
    catch(err){
        return err
    }
}
export async function SignIn(email,password){
    const data=await users.findOne({email:email})
    if(data && await bcrypt.compare(password,data.password)){
        return {success:true,id:data._id}
    }
    else
        return {success:false,message:"User Not Found"}
}
export async function SignUp(name,email,password,phone){
    const exists=await users.findOne({email:email})
    if(exists)
        return {success:false,message:"User already exists"}
    const newUser=new users({name,email,password,phone})
    await newUser.save()
    return {success:true,message:"User Successfully Registered"}
}
export async function bookNow(flightid,userid,passengername,age,phone,aadhar,date,price){
    const ticket=new booking({flightid,userid,passengername,age,phone,aadhar,date,price})
    await ticket.save()
    return {success:true,message:"Booking Confirmed"}
}
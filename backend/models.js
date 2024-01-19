import mongoose from "mongoose";
const travelDestinationSchema=new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String,required:true},
    arrival:String,
    departure:String,
    fare:String
})
const travelDestination=mongoose.model("travelDestination",travelDestinationSchema)

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    phone:{type:Number,required:true}
})
const users=mongoose.model("USER",userSchema)
export {travelDestination, users} 
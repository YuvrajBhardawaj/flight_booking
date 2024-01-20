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

const bookingSchema=mongoose.Schema({
    flightid:{type:String,required:true},
    userid:{type:String,required:true},
    passengername:{type:String,required:true},
    age:{type:Number,required:true},
    phone:{type:Number,required:true},
    aadhar:{type:Number,required:true},
    date:{type:Date,required:true},
    price:{type:String,required:true}
})
const booking=new mongoose.model("bookedticket",bookingSchema)
export {travelDestination, users, booking} 
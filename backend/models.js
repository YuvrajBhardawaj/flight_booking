import mongoose from "mongoose";
const travelDestinationSchema=new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String,required:true},
    arrival:String,
    departure:String,
    fare:String
})
const travelDestination=mongoose.model("travelDestination",travelDestinationSchema)
export default travelDestination
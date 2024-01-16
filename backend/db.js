import travelDestination from "./models.js"
export async function getFlights(from,to){
    try{
        const data=await travelDestination.find({from:from, to:to})
        return data
    }
    catch(err){
        return err
    }
}
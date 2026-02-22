import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

//getting data by specific id
export async function GET(req,{params}) {
    const {id} = await params;

     const singleData= await dbConnect("HerosDB").findOne({_id:new ObjectId(id)});
 

 
  return Response.json({ params: id, singleData })
}
//DELETE data by specific id
export async function DELETE(req,{params}) {
    
    const {id} = await params;
    console.log(id);
   const result=await dbConnect("HerosDB").deleteOne({_id:new ObjectId(id)})


 
  return Response.json({ params: id, result })
}
//PATCH data by specific id
export async function PATCH(req,{params}) {

    const {id} = await params;
  const updatedData=await req.json();
  const result=await dbConnect("HerosDB").updateOne({_id:new ObjectId(id)},{$set:updatedData})

 
  return Response.json({ params: id, result })
}

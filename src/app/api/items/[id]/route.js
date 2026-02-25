import { collectionName, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

//getting data by specific id
export async function GET(req,{params}) {
    const {id} = await params;

     const singleData= await dbConnect(collectionName.HEROS).findOne({_id:new ObjectId(id)});
 

 
  return Response.json({ params: id, singleData })
}
//DELETE data by specific id
export async function DELETE(req,{params}) {
    
    const {id} = await params;
    console.log(id);
   const result=await dbConnect(collectionName.HEROS).deleteOne({_id:new ObjectId(id)})


 
  return Response.json({ params: id, result })
}
//PATCH data by specific id
export async function PATCH(req,{params}) {

    const {id} = await params;
  const updatedData=await req.json();
  const result=await dbConnect(collectionName.HEROS).updateOne({_id:new ObjectId(id)},{$set:updatedData})

 
  return Response.json({ params: id, result })
}

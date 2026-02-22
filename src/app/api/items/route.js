// import { dbConnect } from "@/lib/dbConnect";


// export async function GET() {

//    const data=await dbConnect("Heros").find({}).toArray();
 
//   return Response.json(data)
// }


// export async function POST(req) {

// const postedData=await req.json();
// const result=await dbConnect("HerosDB").insertOne(postedData);

//   return Response.json({result})
// }


// /app/api/items/route.js
import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const collection = await dbConnect("Heros");
    const data = await collection.find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const collection = await dbConnect("Heros");
    const postedData = await req.json();

    const result = await collection.insertOne(postedData);
     revalidatePath("/heros")  //to revalidate the cache and update the data on the page after adding new hero

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), 
    { 
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
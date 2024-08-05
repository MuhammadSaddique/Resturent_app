import connectMongoDB from "@/app/lib/db";
import ResturentSchema from "@/app/lib/ResturentModel";
import { NextResponse } from "next/server";

// GET Method to fetch all restaurants
export async function GET() {
  try {
    await connectMongoDB();
    const resturents = await ResturentSchema.find();
    console.log(resturents);
    return NextResponse.json({ result: resturents });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST Method to create a new restaurant
export async function POST(request) {
  try {
    await connectMongoDB();
    let payload = await request.json();
    let result;
    let success = false;

    if(payload.login){
      //login
      result = await ResturentSchema.findOne({email:payload.email,password:payload.password});
      if(result){
        success = true;
      }
    }else{
      const resturent = new ResturentSchema(payload);
       result = await resturent.save();
       if(result){
        success = true;
       }
    }
    return NextResponse.json({ result, success});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

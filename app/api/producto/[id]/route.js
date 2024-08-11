import connectMongo from "@/libs/mongosb";
import { NextResponse } from "next/server";
import ProductoModel from "@/models/product";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongo();
  const producto = await ProductoModel.findOne({ _id: id });
  return NextResponse.json({ producto }, { status: 200 });
}

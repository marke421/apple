import ProductoModel from "@/models/product";
import connectMongo from "@/libs/mongosb";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("Initializing post request");
  const {
    titulo,
    precio,
    descripcion,
    imagenes,
    categoria,
    divisa,
    capacidad,
    bateria,
  } = await request.json();
  await connectMongo();
  await ProductoModel.create({
    titulo,
    precio,
    descripcion,
    imagenes,
    categoria,
    divisa,
    capacidad,
    bateria,
  });
  return NextResponse.json(
    { message: "Producto añadido correctamente" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongo();
  const productos = await ProductoModel.find();
  return NextResponse.json({ productos });
}

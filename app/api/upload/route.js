import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
// import { writeFile } from "fs/promises";
// import path from "path";

cloudinary.config({
  cloud_name: "dm8c4upgu",
  api_key: "641257394351341",
  api_secret: process.env.API_SECRET,
});

export async function POST(request) {
  const data = await request.formData();

  const imagenes = data.getAll("file");

  if (imagenes.length === 0) {
    return NextResponse.json("Ninguna imagen se ha subido", {
      status: 400,
    });
  }

  const urls = [];
  for (const imagen of imagenes) {
    const bytes = await imagen.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, resul) => {
          if (error) {
            reject(error);
          }
          resolve(resul);
          console.log(resul);
        })
        .end(buffer);
    });

    urls.push(res.secure_url);
  }

  return NextResponse.json({
    message: "Imagen subida",
    urls,
  });
}

import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    titulo: String,
    precio: Number,
    descripcion: String,
    imagenes: Array,
    categoria: String,
    divisa: String,
    bateria: Number,
    capacidad: String,
  },
  { timestamps: true }
);

const ProductoModel =
  mongoose.models.Producto || mongoose.model("Producto", ProductSchema);

export default ProductoModel;

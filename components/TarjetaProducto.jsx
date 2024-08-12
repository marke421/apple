import Image from "next/image";
import React from "react";

const TarjetaProducto = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Image
        alt="Imagen telefono movil"
        src={imagen}
        width={1000}
        height={100}
        className="h-28 w-[6rem] my-4 mx-auto"
      />
      <h3 className="md:text-xl text-md font-semibold">{titulo}</h3>
      <p className="text-gray-700 text-xs md:text-sm">{descripcion}</p>
    </div>
  );
};

export default TarjetaProducto;

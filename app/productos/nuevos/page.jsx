import ListaProductosNuevos from "@/components/ListaProductosNuevos";
import React from "react";

const PaginaNuevos = () => {
  return (
    <div className="min-h-screen text-center md:max-w-[1000px] max-w-[90%] m-auto">
      <h1 className="text-5xl font-bold my-5">Telefonos Nuevos</h1>
      <div className="bg-gray-300 p-7 md:grid xl:grid-cols-3 gap-5 rounded flex flex-col items-center md:grid-cols-2 ">
        <ListaProductosNuevos categoria={"Telefono Nuevo"} />
      </div>
    </div>
  );
};

export default PaginaNuevos;

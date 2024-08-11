import ListaProductos from "@/components/ListaProductosNuevos";
import React from "react";

const PaginaUsados = () => {
  return (
    <div className="min-h-screen text-center max-w-[1000px] m-auto">
      <h1 className="text-5xl font-bold my-5">Telefonos Usados</h1>
      <div className="bg-gray-300 p-7 md:grid xl:grid-cols-3 gap-5 rounded flex flex-col items-center md:grid-cols-2 ">
        <ListaProductos categoria={"Telefono Usado"} />
      </div>
    </div>
  );
};

export default PaginaUsados;

import Producto from "@/components/Producto";
import React from "react";

const PaginaMacbooks = () => {
  return (
    <div className="min-h-screen text-center max-w-[1000px] m-auto">
      <h1 className="text-5xl font-bold my-5">MacBooks</h1>
      <div className="bg-gray-300 p-7 md:grid xl:grid-cols-3 gap-5 rounded flex flex-col items-center md:grid-cols-2 ">
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
        <Producto />
      </div>
    </div>
  );
};

export default PaginaMacbooks;

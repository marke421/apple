import TarjetaTienda from "@/components/TarjetaTienda";
import React from "react";
import celusNuevos from "@/public/iphoneNuevo.jpg";
import celusUsados from "@/public/iphonesUsados.jpg";
import macbook from "@/public/macbook.jpg";
import airpods from "@/public/airpods.jpg";

const PagProductos = () => {
  return (
    <div className="bg-gray-100 text-center p-6 xl:max-h-[91vh]">
      <h1 className="text-4xl font-bold mb-3">Nuestros productos.</h1>
      <h2 className="text-2xl">Que deseas comprar?</h2>
      <div className="lg:grid grid-cols-2 max-w-[800px] gap-4 justify-center content-center m-auto my-6 flex flex-col items-center">
        <TarjetaTienda
          titulo={"iPhones Nuevos"}
          imagen={celusNuevos}
          link={"/productos/nuevos"}
        />
        <TarjetaTienda
          titulo={"iPhones Usados"}
          imagen={celusUsados}
          link={"/productos/usados"}
        />
        <TarjetaTienda
          titulo={"MacBooks"}
          imagen={macbook}
          link={"/productos/macbooks"}
        />
        <TarjetaTienda
          titulo={"Otros Accesorios"}
          imagen={airpods}
          link={"/productos/accesorios"}
        />
      </div>
    </div>
  );
};

export default PagProductos;

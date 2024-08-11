import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://tiendaappledemo.vercel.app/api/producto`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product.");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function PaginaProducto({ params }) {
  const { id } = params;
  const { producto } = await getProductById(id);
  const {
    titulo,
    precio,
    descripcion,
    imagenes,
    categoria,
    capacidad,
    bateria,
    divisa,
  } = producto;

  return (
    <div className="min-h-[91vh] max-w-[90%] m-auto">
      <div className="flex flex-col xl:grid grid-cols-2 items-center">
        <div className="carousel w-full">
          {imagenes.map((imagen, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full md:h-[75vh]"
            >
              <Image
                alt="Imagen Producto"
                src={imagen}
                className="mx-auto w-auto h-auto"
                width={1000}
                height={1000}
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
                <a
                  href={`#slide${
                    ((index - 1 + imagenes.length) % imagenes.length) + 1
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${((index + 1) % imagenes.length) + 1}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded border-2 max-w-lg p-4 w-[90%] mt-3 text-center md:text-left">
          <p className="text-xs text-gray-400">{categoria}</p>
          <h1 className="text-6xl font-bold my-3">{titulo}</h1>
          <p className="font-semibold text-2xl text-gray-500">{capacidad}</p>
          {categoria === "Telefono Usado" ? (
            <p className="font-semibold text-2xl text-gray-500">
              Bateria: {bateria}%
            </p>
          ) : null}
          <p className="font-semibold text-3xl my-5">
            {divisa} {precio}
          </p>
          <a href="#" className="btn btn-neutral font-bold text-white bg-black">
            Chatear por Whatsapp <FaWhatsapp />
          </a>
          <p className="text-green-600 text-xl font-semibold flex justify-center mt-5 text-center w-full mx-auto">
            <FaTruck className="mr-2 my-auto" /> Envio gratuito a todo el pais.
          </p>
        </div>
      </div>
      <div className="text-left max-w-full">
        <h2 className="font-bold text-3xl my-7 text-center">Descripcion</h2>
        <p className="text-lg items-center m-auto my-5">{descripcion}</p>
      </div>
    </div>
  );
}

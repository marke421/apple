import TarjetaProducto from "@/components/TarjetaProducto";
import { FaApple } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import iphone11 from "@/public/iPhone11.jpg";
import iphone13 from "@/public/iPhone13.jpg";
import iphone14 from "@/public/iPhone14.jpg";
import AcordeonFAQ from "@/components/AcordeonFAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-full md:flex items-center justify-center">
      <div className="bg-white p-14 min-h-screen shadow-lg w-full md:w-[1000px] md:mt-4 md:rounded-xl">
        <div className="pb-5 border-b">
          <h1 className="text-6xl font-bold text-left mb-4 flex">
            Apple <FaApple />
          </h1>
          <p>
            El importador numero 1 de celulares iPhone y accesorios en San
            Martin de los Andes
          </p>
        </div>
        <section className="bg-gray-100 py-8 px-6 my-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Algunos de nuestros Productos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md">
              <TarjetaProducto
                titulo={"Iphone 11"}
                imagen={iphone11}
                descripcion={
                  "Excelente telefono economico para adentrarse en el mundo de los iPhone"
                }
              />
              <TarjetaProducto
                titulo={"Iphone 13"}
                imagen={iphone13}
                descripcion={
                  "Potente, rapido, eficiente. La mejor opcion calidad precio actualmente"
                }
              />
              <TarjetaProducto
                titulo={"Iphone 14 pro"}
                imagen={iphone14}
                descripcion={
                  "Telefono muy veloz que nunca te va a dejar a pata"
                }
              />
            </div>
            <Link className="btn btn-outline my-5 mx-auto" href="./productos">
              Ver todo nuestro catalogo
            </Link>
          </div>
        </section>
        <hr className="bg-gray-200" />
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              ¿Por qué Comprar con Nosotros?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
                <FaMoneyBillWave className="h-16 w-16 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  Precios Competitivos
                </h3>
                <p className="text-gray-600">
                  Al ser productos importados, ofrecemos los precios mas
                  economicos en la zona.
                </p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
                <BiMailSend className="h-16 w-16 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
                <p className="text-gray-600">
                  Disfruta de un servicio de envío rápido y eficiente,
                  asegurando que recibas tus productos en el menor tiempo
                  posible.
                </p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
                <CiGift className="h-16 w-16 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  Regalos Exclusivos
                </h3>
                <p className="text-gray-600">
                  Cada compra incluye un vidrio templado y un cargador de
                  regalo. No te los pierdas!
                </p>
              </div>
            </div>
            <Link className="btn btn-default my-5 mx-auto" href="./productos">
              Comprar Ahora
            </Link>
          </div>
        </section>
        <hr className="bg-gray-200" />
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-5">
              <AcordeonFAQ />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

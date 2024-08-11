import Link from "next/link";
import Image from "next/image";

const getProductos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/producto", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Ha fallado el fetch de los productos");
    }
    return res.json();
  } catch (error) {
    console.log("Error cargando productos", error);
  }
};

async function ListaProductosNuevos(props) {
  const { productos } = await getProductos();
  return (
    <>
      {productos.map((rs) =>
        rs.categoria === props.categoria ? (
          <Link
            key={rs._id}
            href={`/productos/${rs._id}`}
            className="max-w-80 bg-white p-4 rounded-lg m-auto md:max-h-[500px]"
          >
            <Image
              className="rounded max-h-[300px] overflow-auto"
              src={rs.imagenes[0]}
              alt="celular"
              height={1000}
              width={1000}
            />
            <h3>{rs.titulo}</h3>
            <p className="font-semibold text-2xl">
              {rs.divisa} {rs.precio}
            </p>
            <p className="font-bold text-green-700">Envio gratis</p>
          </Link>
        ) : null
      )}
    </>
  );
}

export default ListaProductosNuevos;

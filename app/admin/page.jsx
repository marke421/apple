import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";

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

const Admin = async () => {
  const { productos } = await getProductos();
  return (
    <div className="min-h-[91vh] flex flex-col">
      <h1 className="text-3xl my-6 font-bold text-center">
        Panel Administrador
      </h1>
      <Link
        href={"/admin/nuevoproducto"}
        className="btn md:btn-md btn-xs max-w-xs mx-auto mb-3 btn-success "
      >
        Nuevo Producto
      </Link>
      <div className="overflow-x-auto border-2">
        <table className="flex flex-col table text-[10px]">
          <thead className="">
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {productos.map((rs) => (
            <tbody key={rs._id}>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          src={rs.imagenes[0]}
                          alt="imagen"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{rs.titulo}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {rs.divisa} {rs.precio}
                </td>
                <td>{rs.categoria}</td>
                <th className="flex md:gap-4 justify center">
                  <Link
                    href={"/"}
                    className="btn btn-outline md:btn-md btn-xs btn-warning"
                  >
                    <FaRegEdit className="text-xl" />
                  </Link>
                  <Link
                    href={"/"}
                    className="btn btn-outline md:btn-md btn-xs btn-error"
                  >
                    <MdDeleteOutline className="text-xl" />
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admin;

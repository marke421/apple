"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NuevoProducto = () => {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [divisa, setDivisa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [bateria, setBateria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [imagenes, setImagenes] = useState([]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !titulo ||
      !precio ||
      !divisa ||
      !categoria ||
      !bateria ||
      !descripcion ||
      imagenes.length === 0
    ) {
      alert("Llenar todos los campos por favor");
      return;
    }

    const formData = new FormData();

    // Agregar cada imagen al FormData
    for (let i = 0; i < imagenes.length; i++) {
      formData.append("file", imagenes[i]);
    }
    // Subir la imagen al servidor
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    setImagenes(data.urls);

    try {
      const response = await fetch("/api/producto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          precio,
          divisa,
          categoria,
          bateria,
          descripcion,
          capacidad,
          imagenes: data.urls,
        }),
      });
      if (response.ok) {
        router.push("/admin");
      } else {
        throw new Error("Ha fallado al crear nuevo producto");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="min-w-full min-h-[91vh] grid items-center">
      <div>
        <h1 className="text-3xl font-bold text-center mt-6 mb-8">
          Añadir nuevo producto
        </h1>
        <form
          onSubmit={handleSubmit}
          className="md:max-w-[400px] max-w-[90%] m-auto flex flex-col gap-2 font-semibold"
        >
          <label className="input input-bordered flex items-center gap-2">
            Titulo:
            <input
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
              className="grow"
              placeholder="ej: iPhone 15"
            />
          </label>
          <div className="flex flex-row">
            <label className="input input-bordered flex items-center gap-2 w-[50%] text-sm">
              Precio:
              <input
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="grow"
                placeholder="ej: 1000"
              />
            </label>

            <select
              className="select select-bordered w-[50%] max-w-xs"
              onChange={(e) => setDivisa(e.target.value)}
            >
              <option disabled selected>
                Divisa
              </option>
              <option>U$D</option>
              <option>AR$</option>
            </select>
          </div>

          <div className="flex flex-row">
            <select
              className="select select-bordered w-full m-auto"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option disabled selected>
                Categoría
              </option>
              <option>Telefono Nuevo</option>
              <option>Telefono Usado</option>
              <option>MacBook</option>
              <option>Accesorios</option>
            </select>

            <label className="text-xs input input-bordered flex items-center gap-2 w-[50%]">
              Porcentaje bateria:
              <input
                onChange={(e) => setBateria(e.target.value)}
                type="number"
                className="grow text-sm md:text-lg"
                placeholder="ej: 88"
              />
            </label>
          </div>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>

          <select
            className="select select-bordered w-full"
            onChange={(e) => setCapacidad(e.target.value)}
          >
            <option disabled selected>
              Almacenamiento
            </option>
            <option>32 GB</option>
            <option>64 GB</option>
            <option>128 GB</option>
            <option>256 GB</option>
            <option>512 GB</option>
            <option>1 TB</option>
          </select>

          <label className="w-full m-auto">
            Imagenes:
            <input
              onChange={(e) => {
                setImagenes(Array.from(e.target.files)); // Convertir FileList a array
              }}
              type="file"
              multiple
              className="file-input file-input-bordered w-full max-w-xl"
            />
          </label>
          <button type="submit" className="btn btn-success w-full my-5">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevoProducto;

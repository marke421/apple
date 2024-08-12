import React from "react";
import Image from "next/image";
import Link from "next/link";

const TarjetaTienda = ({ imagen, titulo, link }) => {
  return (
    <Link
      href={link}
      className="card bg-base-100 image-full sm:w-96 w-[90%] shadow-xl h-60"
    >
      <figure>
        <Image className="w-full" src={imagen} alt="Celular usado" />
      </figure>
      <div className="card-body">
        <h3 className="m-auto font-bold text-xl">{titulo}</h3>
      </div>
    </Link>
  );
};

export default TarjetaTienda;

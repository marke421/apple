import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-center md:navbar bg-black text-white">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl text-md hover:bg-gray-800"
          href={"/"}
        >
          Apple
          <FaApple />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="hover:bg-gray-800">iPhone</summary>
              <ul className="bg-base-100 rounded-t-none p-2 text-black ">
                <li>
                  <Link className="" href={"/productos/nuevos"}>
                    Nuevos
                  </Link>
                </li>
                <li>
                  <Link href={"/productos/usados"}>Usados</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/productos/macbooks"}>MacBooks</Link>
          </li>
          <li>
            <Link href={"/productos/accesorios"}>Accesorios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

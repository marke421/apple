import React from "react";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col footer bg-black text-neutral-content items-center p-4">
      <aside className="m-auto grid-flow-col items-center">
        <FaApple />
        <p>
          Copyright © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </aside>
      <nav className="grid grid-flow-col gap-4 md:m-0 md:place-self-center md:justify-self-end m-auto">
        <a className="cursor-pointer">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a className="cursor-pointer">
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

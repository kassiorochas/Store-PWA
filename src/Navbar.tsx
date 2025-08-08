"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu após a navegação
    }
  };

  const linkClasses = (path: string) =>
    `px-3 py-2 hover:text-green-600 transition ${
      pathname === path
        ? "text-green-700 font-semibold border-b-2 border-green-700"
        : ""
    }`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed w-full z-50">
      <div className="text-xl font-bold text-purple-700">Store PWA</div>

      {/* Menu Completo - Visível apenas em telas grandes */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" className={linkClasses("/")}>
          Início
        </Link>
        <a
          href="#servicos"
          onClick={(e) => scrollToSection(e, "servicos")}
          className="px-3 py-2 hover:text-green-600 transition"
        >
          Serviços
        </a>
        <Link href="/portfolio" className={linkClasses("/portfolio")}>
          Portfólio
        </Link>
        <a
          href="#sobre"
          onClick={(e) => scrollToSection(e, "sobre")}
          className="px-3 py-2 hover:text-green-600 transition"
        >
          Sobre
        </a>
        <a
          href="#contato"
          onClick={(e) => scrollToSection(e, "contato")}
          className="px-3 py-2 hover:text-green-600 transition"
        >
          Contato
        </a>
      </div>

      {/* Botão de Menu Hambúrguer - Visível apenas em telas pequenas */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu de Tela Cheia para Celular */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={linkClasses("/")}
          >
            Início
          </Link>
          <a
            href="#servicos"
            onClick={(e) => scrollToSection(e, "servicos")}
            className="w-full text-center px-3 py-2 hover:text-green-600 transition"
          >
            Serviços
          </a>
          <Link
            href="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className={linkClasses("/portfolio")}
          >
            Portfólio
          </Link>
          <a
            href="#sobre"
            onClick={(e) => scrollToSection(e, "sobre")}
            className="w-full text-center px-3 py-2 hover:text-green-600 transition"
          >
            Sobre
          </a>
          <a
            href="#contato"
            onClick={(e) => scrollToSection(e, "contato")}
            className="w-full text-center px-3 py-2 hover:text-green-600 transition"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}

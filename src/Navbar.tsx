"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClasses = (path: string) =>
    `px-3 py-2 hover:text-green-600 transition ${
      pathname === path
        ? "text-green-700 font-semibold border-b-2 border-green-700"
        : ""
    }`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed w-full z-50">
      <div className="text-xl font-bold text-purple-700">Store PWA</div>
      <div className="flex space-x-4">
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
    </nav>
  );
}

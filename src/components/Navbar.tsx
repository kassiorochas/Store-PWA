"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const linkClasses = (href: string, hash = "") => {
    const isActivePath = pathname === href;
    const isHashActive = hash && activeHash === hash;

    if (href.startsWith("/#")) {
      return `px-3 py-2 hover:text-green-600 transition ${
        isHashActive
          ? "text-green-700 font-semibold border-b-2 border-green-700"
          : ""
      }`;
    }

    return `px-3 py-2 hover:text-green-600 transition ${
      isActivePath
        ? "text-green-700 font-semibold border-b-2 border-green-700"
        : ""
    }`;
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed w-full z-50 h-16">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logotipo de Store PWA"
          width={100}
          height={0}
          className="h-full w-auto"
        />
      </Link>

      <div className="flex space-x-4">
        <Link href="/" className={linkClasses("/")}>
          Início
        </Link>
        <Link href="/servicos" className={linkClasses("/servicos")}>
          Serviços
        </Link>
        <Link href="/portfolio" className={linkClasses("/portfolio")}>
          Portfólio
        </Link>
        <Link href="/sobre" className={linkClasses("/sobre")}>
          Sobre
        </Link>
        <Link href="/contato" className={linkClasses("/contato")}>
          Contato
        </Link>
      </div>
    </nav>
  );
}

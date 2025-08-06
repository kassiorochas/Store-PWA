"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioPreview = [
  {
    title: "Nordestino Pizzaria Delivery",
    image: "/images/portfolio/nordestino-pizzaria.jpg",
  },
  {
    title: "Gabriele Inalda Planejados",
    image: "/images/portfolio/gabriele-inalda.jpg",
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero ou conteúdo atual da Home (mantém o que já existe) */}
      
      {/* Sessão Portfólio */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Portfólio</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {portfolioPreview.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Ver Portfólio Completo
        </Link>
      </section>
    </div>
  );
}

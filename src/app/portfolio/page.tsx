"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const portfolioData: Project[] = [
  {
    title: "Nordestino Pizzaria Delivery",
    category: "PWA para delivery",
    image: "/images/portfolio/nordestino-pizzaria-preview.jpg",
    description: "Aplicativo PWA para pedidos online de pizzaria com menu dinâmico e integração ao WhatsApp. Uma solução moderna para delivery, oferecendo uma experiência de compra rápida e intuitiva para o cliente.",
    link: "https://nordestinopizzariadelivery.netlify.app/"
  },
  {
    title: "Gabriele Inalda Planejados",
    category: "Site institucional",
    image: "/images/portfolio/gabriele-inalda.jpg",
    description: "Site institucional para apresentação de móveis planejados e captação de clientes. Uma vitrine digital elegante e funcional para destacar a qualidade dos projetos e atrair novos interessados.",
    link: "https://gabrieleinaldaplanejados.netlify.app/"
  }
];

export default function Portfolio() {
  return (
    // Alteração nesta linha: ajuste o espaçamento superior (pt-12)
    <div className="container mx-auto px-4 pt-12 pb-1"> 
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Portfólio
      </h1>

      <div className="space-y-16">
        {portfolioData.map((project, idx) => {
          const isGif = project.title === "Nordestino Pizzaria Delivery";
          const imageWidthClass = isGif ? "md:w-1/5" : "md:w-1/2";
          const textWidthClass = isGif ? "md:w-4/5" : "md:w-1/2";

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={imageWidthClass}>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  {isGif ? (
                    <img
                      src="/images/portfolio/nordestino-pizzaria-demo.gif"
                      alt={project.title}
                      className="rounded-xl shadow-lg hover:shadow-2xl transition"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-lg hover:shadow-2xl transition"
                    />
                  )}
                </Link>
              </div>

              <div className={textWidthClass}>
                <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-green-600 font-semibold mb-4">{project.category}</p>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Ver Projeto
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
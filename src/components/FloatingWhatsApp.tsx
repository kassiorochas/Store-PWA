"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "5511954699633";
  const preFilledMessage = encodeURIComponent(
    "Olá, Kássio! Vim através do seu site e gostaria de conversar sobre os seus serviços. Poderíamos agendar um horário para conversarmos?"
  );

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${preFilledMessage}`;

  return (
    <div className="fixed bottom-17 right-6 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </Link>
    </div>
  );
}

import React from "react";
import Link from "next/link";

export default function ContatoPage() {
  const phoneNumber = "5511954699633"; // Seu número de telefone com o código do país
  const preFilledMessage = encodeURIComponent(
    "Olá, Store PWA! Vim através do seu site e gostaria de conversar sobre os seus serviços. Poderíamos agendar um horário para conversarmos?"
  );

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${preFilledMessage}`;

  return (
    <div className="container mx-auto px-4 pt-12 pb-20 text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-10">
        Entre em Contato
      </h1>

      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-xl bg-gray-50">
        <p className="text-gray-600 mb-6">
          Para tirar dúvidas, solicitar um orçamento ou agendar uma conversa,
          envie uma mensagem diretamente para o meu WhatsApp.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto py-3 px-6 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition"
        >
          Enviar Mensagem pelo WhatsApp
        </Link>
      </div>
    </div>
  );
}

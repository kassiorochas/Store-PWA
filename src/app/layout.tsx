import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // ajuste caso esteja em outro local
import Footer from "../components/Footer"; // remova se não tiver footer
import BackToTop from "../components/BackToTop";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Store PWA",
  description: "Criação de Sites, PWAs e APPs que Impulsionam seu Negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 text-gray-900">
        {/* ✅ Navbar global */}
        <Navbar />

        {/* ✅ Conteúdo principal */}
        <main className="pt-20 min-h-screen">{children}</main>

        {/* ✅ Footer global */}
        <Footer />

        {/* ✅ Botão Voltar ao Topo com Tooltip */}
        <div className="group">
          <BackToTop />
          <span className="fixed bottom-16 right-5 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Voltar ao topo
          </span>
        </div>

        {/* ✅ Botão WhatsApp com Tooltip */}
        <div className="group">
          <FloatingWhatsApp />
          <span className="fixed bottom-32 right-5 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Fale conosco
          </span>
        </div>
      </body>
    </html>
  );
}

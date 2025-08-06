import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Store PWA - Todos os direitos reservados.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/kássio-rocha-720a9881"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-200 transition"
          >
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-pink-200 transition">
            <Instagram size={20} />
          </a>
          <a
            href="mailto:kassiorochas@gmail.com"
            className="hover:text-green-200 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

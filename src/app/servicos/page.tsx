import Link from "next/link";

export default function Servicos() {
  return (
    <section className="bg-gray-50 pb-1">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Serviços</h1>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Sites Institucionais */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              SI
            </div>
            <h3 className="text-xl font-semibold mb-3">Sites Institucionais</h3>
            <p className="text-gray-600">
              Crie uma presença online sólida e profissional com um site sob medida.
              Design responsivo e otimizado para transmitir confiança e comunicar
              sua mensagem de forma eficaz.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Progressive Web Apps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
              PWA
            </div>
            <h3 className="text-xl font-semibold mb-3">Progressive Web Apps</h3>
            <p className="text-gray-600">
              PWAs funcionam offline, podem ser instaladas no dispositivo e
              oferecem experiência de aplicativo moderna e eficiente.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* E-commerce */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-orange-600 flex items-center justify-center text-white text-2xl font-bold">
              EC
            </div>
            <h3 className="text-xl font-semibold mb-3">E-commerce / Loja Virtual</h3>
            <p className="text-gray-600">
              Venda produtos ou serviços online com segurança e facilidade.
              Soluções completas para gerenciar sua loja virtual.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Consultoria Estratégica */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              CE
            </div>
            <h3 className="text-xl font-semibold mb-3">Consultoria Estratégica</h3>
            <p className="text-gray-600">
              Orientação estratégica para impulsionar seus projetos digitais.
              Planejamento e execução focados em resultados.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Google Ads */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl font-bold">
              GA
            </div>
            <h3 className="text-xl font-semibold mb-3">Google Ads</h3>
            <p className="text-gray-600">
              Aumente a visibilidade e o tráfego do seu negócio com anúncios pagos.
              Estratégias otimizadas para atrair clientes qualificados e gerar ROI.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Agentes de IA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
            <div className="mb-4 h-14 w-14 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
              IA
            </div>
            <h3 className="text-xl font-semibold mb-3">Agentes de IA</h3>
            <p className="text-gray-600">
              Automatize tarefas e otimize processos com soluções inteligentes.
              Integração de agentes de IA para eficiência e personalização.
            </p>
            <Link
              href="/contato"
              className="block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

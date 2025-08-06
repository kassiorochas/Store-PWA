import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40 text-center md:text-left bg-gradient-to-tr from-purple-400 via-purple-500 to-purple-600 rounded-2xl shadow-lg">
        {/* Elemento decorativo de fundo */}
        <div className="absolute -right-40 top-0 h-[32rem] w-[32rem] bg-gradient-to-tr from-purple-500 via-pink-400 to-purple-300 opacity-30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Conteúdo principal do herói */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Transforme sua Ideia em Realidade Digital
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl">
          Criação de Sites, PWAs e E-commerces que Impulsionam seu Negócio.
          Com expertise de um Gerente de Projetos, entregamos soluções digitais
          modernas e eficazes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/contato"
            className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition transform flex items-center justify-center"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-700 shadow-md hover:shadow-xl hover:scale-105 transition transform flex items-center justify-center"
          >
            Ver Portfólio
          </Link>
        </div>
      </section>

      {/* Seção de diferenciais */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Por que escolher nossas soluções?
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {/* Diferencial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
              <div className="mb-4 h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Design moderno</h3>
              <p className="text-gray-600">
                Paletas de cores acolhedoras, tipografia expressiva e micro‑interações para criar experiências envolventes.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
              <div className="mb-4 h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance e SEO</h3>
              <p className="text-gray-600">
                Sites rápidos e otimizados para buscadores, garantindo visibilidade e melhor posição nos resultados de pesquisa.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200 hover:shadow-xl transition transform hover:scale-105">
              <div className="mb-4 h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Tecnologia PWA</h3>
              <p className="text-gray-600">
                Experiências progressivas que funcionam offline, podem ser instaladas no dispositivo e oferecem experiência de app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

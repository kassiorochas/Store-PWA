/**
 * Página exibida quando o usuário está offline e solicita um recurso
 * que não está em cache.  Mantém a identidade visual e oferece
 * orientação básica.
 */
export default function Offline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Você está offline</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
        Parece que você perdeu a conexão com a internet. Algumas
        funcionalidades podem não estar disponíveis. Quando a conexão
        retornar, o site voltará a funcionar normalmente.
      </p>
    </div>
  );
}
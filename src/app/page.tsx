import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <div>
        <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-2">
          Digite o código
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="codigo"
            name="codigo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 12345"
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Pesquisar
          </button>
        </div>
      </div>

      <div id="resultado" className="space-y-4">
        {/*
        <div className="border-t pt-4">
          <img src="URL_DA_IMAGEM" alt="Descrição" className="w-full rounded-lg shadow-sm" />
          <p className="text-lg font-bold mt-2">Nome do item</p>
          <p className="text-sm text-gray-600">Ano: 2023</p>
          <a href="LINK" target="_blank" className="text-blue-600 hover:underline text-sm">Ver mais detalhes</a>
        </div>
        */}
      </div>
    </div>
  );
}

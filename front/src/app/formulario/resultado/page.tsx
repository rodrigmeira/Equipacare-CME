// src/app/formulario/resultado/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import relatorio from "@/../public/icons/pdf-export.svg";
import Image from "next/image";
export default function ResultadoPage() {
  const router = useRouter();
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const fetchResultado = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/calculadora");
        setResultado(data[data.length - 1]);
      } catch (error) {
        console.error("Erro ao buscar o resultado:", error);
      }
    };

    fetchResultado();
  }, []);

  const handleGerarRelatorio = () => {
    // Implementar a lógica para gerar um relatório detalhado
  };

  return (
    <div className="w-11/12 py-14 px-8 bg-color border-2 border-color-primary rounded-3xl transform -translate-y-6 p-5 flex flex-col justify-center items-center">
      {resultado ? (
        <div className="space-y-6">
          <div className="bg-indigo-900 p-8 rounded-lg shadow-md text-white text-center">
            <p>RESULTADO 1</p>
          </div>
          <div className="bg-indigo-900 p-8 rounded-lg shadow-md text-white text-center">
            <p>RESULTADO 2</p>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleGerarRelatorio}
              style={{ backgroundColor: "#5A9B1B" }}
              className="text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            >
              <Image
                src={relatorio}
                width={15}
                alt="Ícone de PDF"
                style={{ marginRight: '8px' }}
              />
              Gerar Relatório Detalhado
            </button>
          </div>
        </div>
      ) : (
        <p>Carregando resultado...</p>
      )}
    </div>
  );
}

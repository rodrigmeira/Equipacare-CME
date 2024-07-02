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
    // Adicionar a lógica para gerar um relatório detalhado
  };

  return (
    <div className="w-11/12 py-14 px-8 bg-color border-2 border-color-primary rounded-3xl transform -translate-y-6 p-5 flex flex-col justify-center items-center">
      {resultado ? (
        <div className="space-y-12 text-center text-white"> {/* Alterado de space-y-6 para space-y-12 */}
          <div className="mb-40"> 
            <h1 className="text-3xl font-bold mb-4 text-color-primary-focus">
              AUTOCLAVES A VAPOR
            </h1>
            <p className="text-xl mb-6">
              De acordo com os dados fornecidos o modelo adequado para seu hospital é:
            </p>
            <div className="flex items-center justify-around">
              <div>
                <Image
                  src="/autoclave.png" 
                  alt="Imagem de autoclave"
                  width={300}
                  height={200}
                />
              </div>
              <div>
                <p className="text-2xl font-bold">Marca A</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 text-color-primary-focus">
              LAVADORA TERMODESINFECTORA
            </h1>
            <p className="text-xl mb-6">
              De acordo com os dados fornecidos o modelo adequado para seu hospital é:
            </p>
            <div className="flex items-center justify-around">
              <div>
                <Image
                  src="/lavadora.png"
                  alt="Imagem de lavadora"
                  width={250}
                  height={200}
                />
              </div>
              <div>
                <p className="text-2xl font-bold">Marca A</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleGerarRelatorio}
              style={{ backgroundColor: "#5A9B1B" }}
              className="text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            >
              <Image
                src={relatorio}
                width={15}
                alt="Ícone de PDF"
                style={{ marginRight: "8px" }}
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

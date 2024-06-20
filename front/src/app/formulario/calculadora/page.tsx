"use client";

import { ButtonForm, InputForm } from "@/components";
import { validationContext } from "@/middleware/validationContext";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";

export default function CalculadoraPage() {
  validationContext();
  const router = useRouter();

  const [numeroSalas, setNumeroSalas] = useState("");
  const [numeroCirurgias, setNumeroCirurgias] = useState("");
  const [processaTecidos, setProcessaTecidos] = useState("");
  const [diasDeCirurgias, setDiasDeCirurgias] = useState("");
  const [intervaloPico, setIntervaloPico] = useState("");
  const [numeroLeitosUti, setNumeroLeitosUti] = useState("");
  const [numeroLeitosInternacoes, setNumeroLeitosInternacoes] = useState("");
  const [numeroAutoclaves, setNumeroAutoclaves] = useState("");
  const [numeroLavadorasTermo, setNumeroLavadorasTermo] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Carregando resultado...");

    const formData = {
      numeroSalas,
      numeroCirurgias,
      processaTecidos,
      diasDeCirurgias,
      intervaloPico,
      numeroLeitosUti,
      numeroLeitosInternacoes,
      numeroAutoclaves,
      numeroLavadorasTermo,
    };

    try {
      const formResponse = await axios.post(
        "http://localhost:8080/calculadora",
        formData
      );
      const getResponse = await axios.get("http://localhost:8080/calculadora");
      const resposta = getResponse.data[getResponse.data.length - 1];

      if (formResponse.status === 200) {
        console.log(resposta);
        setNumeroSalas("");
        setNumeroCirurgias("");
        setProcessaTecidos("");
        setDiasDeCirurgias("");
        setIntervaloPico("");
        setNumeroLeitosUti("");
        setNumeroLeitosInternacoes("");
        setNumeroAutoclaves("");
        setNumeroLavadorasTermo("");

        setTimeout(() => {  //ATRASO colocado de proposito para aparecer o spinner
        router.push("/formulario/resultado");
        }, 4000);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <div className="relative w-11/12 py-14 px-8 bg-white border-2 border-color-primary rounded-3xl transform -translate-y-6 p-5 flex flex-col justify-center items-center">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-200 rounded-3xl opacity-75 flex justify-center items-center z-50">
          <div className="text-center">
            <div className="flex justify-center items-center mb-3">
              <CirclesWithBar color="#5A9B1B" height={150} width={150} />
            </div>
            <p className="text-black text-3xl font-bold">{loadingMessage}</p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
        <div>
          <InputForm
            type="number"
            id="numeroSalas"
            value={numeroSalas}
            onChange={(e) => setNumeroSalas(e.target.value)}
            required
          >
            Número de salas cirúrgicas
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="numeroCirurgias"
            value={numeroCirurgias}
            onChange={(e) => setNumeroCirurgias(e.target.value)}
            required
          >
            Número cirurgias/sala/dia
          </InputForm>
        </div>
        <div>
          <InputForm
            type="text"
            id="processaTecidos"
            value={processaTecidos}
            onChange={(e) => setProcessaTecidos(e.target.value)}
            required
          >
            Processos de tecidos?
          </InputForm>
        </div>
        <div>
          <InputForm
            type="text"
            id="diasDeCirurgias"
            value={diasDeCirurgias}
            onChange={(e) => setDiasDeCirurgias(e.target.value)}
            required
          >
            As cirurgias serão realizadas em quais dias da semana?
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="intervaloPico"
            value={intervaloPico}
            onChange={(e) => setIntervaloPico(e.target.value)}
            required
          >
            Qual o intervalo de pico de funcionamento da CME?
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="numeroLeitosUti"
            value={numeroLeitosUti}
            onChange={(e) => setNumeroLeitosUti(e.target.value)}
            required
          >
            Número leitos UTI
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="numeroLeitosInternacoes"
            value={numeroLeitosInternacoes}
            onChange={(e) => setNumeroLeitosInternacoes(e.target.value)}
            required
          >
            Número leitos Internação, RPA, Observações, HD...
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="numeroAutoclaves"
            value={numeroAutoclaves}
            onChange={(e) => setNumeroAutoclaves(e.target.value)}
            required
          >
            Número de Autoclaves
          </InputForm>
        </div>
        <div>
          <InputForm
            type="number"
            id="numeroLavadorasTermo"
            value={numeroLavadorasTermo}
            onChange={(e) => setNumeroLavadorasTermo(e.target.value)}
            required
          >
            Número de Lavadoras Termo
          </InputForm>
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <ButtonForm>CALCULAR</ButtonForm>
        </div>
      </form>
    </div>
  );
}

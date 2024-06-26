"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";
import { ButtonForm } from "@/components";

export default function CalculadoraPage() {
  const router = useRouter();

  const [numeroSalas, setNumeroSalas] = useState("");
  const [numeroCirurgias, setNumeroCirurgias] = useState("");
  const [intervaloPico, setIntervaloPico] = useState("");
  const [diasDeCirurgias, setDiasDeCirurgias] = useState<string[]>([]);
  const [processaTecidos, setProcessaTecidos] = useState("");
  const [numeroLeitosUti, setNumeroLeitosUti] = useState("");
  const [numeroLeitosRPA, setNumeroLeitosRPA] = useState("");
  const [numeroLeitosInternacao, setNumeroLeitosInternacao] = useState("");
  const [numeroLeitosObservacao, setNumeroLeitosObservacao] = useState("");
  const [numeroLeitosHospitalDia, setNumeroLeitosHospitalDia] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Carregando resultado...");

    const formData = {
      numeroSalas,
      numeroCirurgias,
      intervaloPico,
      diasDeCirurgias,
      processaTecidos,
      numeroLeitosUti,
      numeroLeitosRPA,
      numeroLeitosInternacao,
      numeroLeitosObservacao,
      numeroLeitosHospitalDia,
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
        setIntervaloPico("");
        setDiasDeCirurgias([]);
        setProcessaTecidos("");
        setNumeroLeitosUti("");
        setNumeroLeitosRPA("");
        setNumeroLeitosInternacao("");
        setNumeroLeitosObservacao("");
        setNumeroLeitosHospitalDia("");

        setTimeout(() => {
          router.push("/formulario/resultado");
        }, 4000);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDiasDeCirurgiasChange = (day: string) => {
    setDiasDeCirurgias((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2] ">
      <div className="bg-white border-2 border-color-primary rounded-3xl shadow-lg w-full max-w-4xl p-10">
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de salas cirúrgicas</label>
            <input
              type="number"
              value={numeroSalas}
              onChange={(e) => setNumeroSalas(e.target.value)}
              className="p-2 border rounded-md border-color-primary w-1/5"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de cirurgias por sala por dia</label>
            <input
              type="number"
              value={numeroCirurgias}
              onChange={(e) => setNumeroCirurgias(e.target.value)}
              className="p-2 border border-color-primary rounded-md w-1/5"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">
              Qual o intervalo de pico de funcionamento da CME? (em horas)
            </label>
            <input
              type="number"
              value={intervaloPico}
              onChange={(e) => setIntervaloPico(e.target.value)}
              className="p-2 border rounded-md border-color-primary"
            />
          </div>
          <fieldset className="flex items-center justify-center">
            <legend className="mb-1 font-semibold">As cirurgias serão realizadas em quais dias da semana?</legend>
            <div className="grid grid-cols-4 gap-3">
              {["Todos", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map(
                (day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={diasDeCirurgias.includes(day)}
                      onChange={() => handleDiasDeCirurgiasChange(day)}
                      className="mr-2 w-5 h-4"
                    />
                    {day}
                  </label>
                )
              )}
            </div>
          </fieldset>
          <fieldset className="flex items-center justify-center">
            <legend className="mb-1 font-semibold">Processamento de tecidos ou apenas instrumental?</legend>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Tecidos e Instrumental"
                  checked={processaTecidos === "Tecidos e Instrumental"}
                  onChange={(e) => setProcessaTecidos(e.target.value)}
                  className="mr-2 w-4 h-4"
                />
                Tecidos e Instrumental
              </label>
              <label className="flex items-center justify-between">
                <input
                  type="radio"
                  value="Apenas instrumental"
                  checked={processaTecidos === "Apenas instrumental"}
                  onChange={(e) => setProcessaTecidos(e.target.value)}
                  className="mr-2 w-4 h-4"
                />
                Apenas instrumental
              </label>
            </div>
          </fieldset>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de leitos UTI</label>
            <input
              type="number"
              value={numeroLeitosUti}
              onChange={(e) => setNumeroLeitosUti(e.target.value)}
              className="p-2 border rounded-md w-1/5 border-color-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de leitos RPA</label>
            <input
              type="number"
              value={numeroLeitosRPA}
              onChange={(e) => setNumeroLeitosRPA(e.target.value)}
              className="p-2 border rounded-md w-1/5 border-color-primary"
            /> 
          </div>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de leitos Internação</label>
            <input
              type="number"
              value={numeroLeitosInternacao}
              onChange={(e) => setNumeroLeitosInternacao(e.target.value)}
              className="p-2 border rounded-md w-1/5 border-color-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de leitos Observação</label>
            <input
              type="number"
              value={numeroLeitosObservacao}
              onChange={(e) => setNumeroLeitosObservacao(e.target.value)}
              className="p-2 border rounded-md w-1/5 border-color-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="mr-4 font-semibold">Número de leitos Hospital Dia</label>
            <input
              type="number"
              value={numeroLeitosHospitalDia}
              onChange={(e) => setNumeroLeitosHospitalDia(e.target.value)}
              className="p-2 border rounded-md w-1/5 border-color-primary"
            />
          </div>
        </form>
      </div>
      <div className="md:col-span-2 mt-8 flex items-center justify-center">
          <ButtonForm>CALCULAR</ButtonForm>
      </div>
    </div>
  );
}

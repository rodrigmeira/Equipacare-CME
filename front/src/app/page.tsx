"use client";

import { useState } from "react";

export default function Page() {
  const [numeroSalas, setNumeroSalas] = useState("");
  const [numeroCirurgias, setNumeroCirurgias] = useState("");
  const [processaTecidos, setProcessaTecidos] = useState("");
  const [diasDeCirurgias, setDiasDeCirurgias] = useState("");
  const [intervaloPico, setIntervaloPico] = useState("");
  const [numeroLeitosUti, setNumeroLeitosUti] = useState("");
  const [numeroLeitosInternacoes, setNumeroLeitosInternacoes] = useState("");
  const [numeroAutoclaves, setNumeroAutoclaves] = useState("");
  const [numeroLavadorasTermo, setNumeroLavadorasTermo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

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

    const sendFormData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const formResponse = await fetch(
        "http://localhost:8080/calculadora",
        sendFormData
      );
      if (formResponse.ok) {
        alert("Formulario enviado com sucesso!");
        setNumeroSalas("");
        setNumeroCirurgias("");
        setProcessaTecidos("");
        setDiasDeCirurgias("");
        setIntervaloPico("");
        setNumeroLeitosUti("");
        setNumeroLeitosInternacoes("");
        setNumeroAutoclaves("");
        setNumeroLavadorasTermo("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border p-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6 font-bold">Calculadora</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="numeroSalas" className="flex flex-col" />
        Número de salas cirúrgicas
        <input
          id="numeroSalas"
          value={numeroSalas}
          type="number"
          className="border"
          onChange={(e) => setNumeroSalas(e.target.value)}
          required
        />
        <label htmlFor="numeroCirurgias" className="flex flex-col" />
        Número cirúrgias/sala/dia
        <input
          id="numeroCirurgias"
          value={numeroCirurgias}
          type="number"
          className="border"
          onChange={(e) => setNumeroCirurgias(e.target.value)}
          required
        />
        <label htmlFor="processaTecidos" className="flex flex-col" />
        Processos de tecidos?
        <input
          id="processaTecidos"
          value={processaTecidos}
          type="text"
          className="border"
          onChange={(e) => setProcessaTecidos(e.target.value)}
          required
        />
        <label htmlFor="diasDeCirurgias" className="flex flex-col" />
        As cirúrgias serão realizadas em quais dias da semana?
        <input
          id="diasDeCirurgias"
          value={diasDeCirurgias}
          type="text"
          className="border"
          onChange={(e) => setDiasDeCirurgias(e.target.value)}
          required
        />
        <label htmlFor="intervaloPico" className="flex flex-col" />
        Qual o interval o de pico de funcionamento / da CME (período de
        processamento de 90% do material?)
        <input
          id="intervaloPico"
          value={intervaloPico}
          type="number"
          className="border"
          onChange={(e) => setIntervaloPico(e.target.value)}
          required
        />
        <label htmlFor="numeroLeitosUti" className="flex flex-col" />
        Número leitos UTI
        <input
          id="numeroLeitosUti"
          value={numeroLeitosUti}
          type="number"
          className="border"
          onChange={(e) => setNumeroLeitosUti(e.target.value)}
          required
        />
        <label htmlFor="numeroLeitosInternacoes" className="flex flex-col" />
        Número leitos Internação, RPA, Observações, HD...
        <input
          id="numeroLeitosInternacoes"
          value={numeroLeitosInternacoes}
          type="number"
          className="border"
          onChange={(e) => setNumeroLeitosInternacoes(e.target.value)}
          required
        />
        <label htmlFor="numeroAutoclaves" className="flex flex-col" />
        Número de Autoclaves
        <input
          id="numeroAutoclaves"
          value={numeroAutoclaves}
          type="number"
          className="border"
          onChange={(e) => setNumeroAutoclaves(e.target.value)}
          required
        />
        <label htmlFor="numeroLavadorasTermo" className="flex flex-col" />
        Número de Lavadoras Termo
        <input
          id="numeroLavadorasTermo"
          value={numeroLavadorasTermo}
          type="number"
          className="border"
          onChange={(e) => setNumeroLavadorasTermo(e.target.value)}
          required
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="border bg-black text-slate-50 py-2 px-5"
          >
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
}

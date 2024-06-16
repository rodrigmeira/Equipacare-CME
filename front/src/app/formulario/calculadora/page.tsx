"use client";

import { ButtonForm, InputForm } from "@/components";
import { useContextForm } from "@/context/Context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Page() {
  const { nomeCompleto, telefone, email, cepHospital, cargo } =
    useContextForm();

  const router = useRouter();

  if (
    nomeCompleto.length === 0 &&
    telefone.length === 0 &&
    email.length === 0 &&
    cepHospital.length === 0 &&
    cargo.length === 0
  ) {
    router.push("/formulario");
  }

  const [numeroSalas, setNumeroSalas] = useState("");
  const [numeroCirurgias, setNumeroCirurgias] = useState("");
  const [processaTecidos, setProcessaTecidos] = useState("");
  const [diasDeCirurgias, setDiasDeCirurgias] = useState("");
  const [intervaloPico, setIntervaloPico] = useState("");
  const [numeroLeitosUti, setNumeroLeitosUti] = useState("");
  const [numeroLeitosInternacoes, setNumeroLeitosInternacoes] = useState("");
  const [numeroAutoclaves, setNumeroAutoclaves] = useState("");
  const [numeroLavadorasTermo, setNumeroLavadorasTermo] = useState("");
  const [resposta, setResposta] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    const formResponse = await axios.post(
      "http://localhost:8080/calculadora",
      formData
    );
    const getResponse = await axios.get("http://localhost:8080/calculadora");
    await setResposta(getResponse.data[getResponse.data.length - 1]);

    try {
      if (formResponse.status == 200) {
        console.log(getResponse.data[getResponse.data.length - 1]);
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
    <div className="w-11/12 py-14 px-8 bg-white border-2 border-color-primary rounded-3xl transform -translate-y-6 p-5 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputForm
          type="number"
          id="numeroSalas"
          value={numeroSalas}
          onChange={(e) => setNumeroSalas(e.target.value)}
          required
          children="Número de salas cirúrgicas"
        />
        <InputForm
          type="number"
          id="numeroCirurgias"
          value={numeroCirurgias}
          onChange={(e) => setNumeroCirurgias(e.target.value)}
          required
          children="Número cirúrgias/sala/dia"
        />
        <InputForm
          type="text"
          id="processaTecidos"
          value={processaTecidos}
          onChange={(e) => setProcessaTecidos(e.target.value)}
          required
          children="Processos de tecidos?"
        />
        <InputForm
          type="text"
          id="diasDeCirurgias"
          value={diasDeCirurgias}
          onChange={(e) => setDiasDeCirurgias(e.target.value)}
          required
          children="As cirúrgias serão realizadas em quais dias da semana?"
        />
        <InputForm
          type="number"
          id="intervaloPico"
          value={intervaloPico}
          onChange={(e) => setIntervaloPico(e.target.value)}
          required
          children="Qual o interval o de pico de funcionamento / da CME (período de
        processamento de 90% do material?)"
        />
        <InputForm
          type="number"
          id="numeroLeitosUti"
          value={numeroLeitosUti}
          onChange={(e) => setNumeroLeitosUti(e.target.value)}
          required
          children="Número leitos UTI"
        />
        <InputForm
          type="number"
          id="numeroLeitosInternacoes"
          value={numeroLeitosInternacoes}
          onChange={(e) => setNumeroLeitosInternacoes(e.target.value)}
          required
          children="Número leitos Internação, RPA, Observações, HD..."
        />
        <InputForm
          type="number"
          id="numeroAutoclaves"
          value={numeroAutoclaves}
          onChange={(e) => setNumeroAutoclaves(e.target.value)}
          required
          children="Número de Autoclaves"
        />
        <InputForm
          type="number"
          id="numeroLavadorasTermo"
          value={numeroLavadorasTermo}
          onChange={(e) => setNumeroLavadorasTermo(e.target.value)}
          required
          children="Número de Lavadoras Termo"
        />

        <div className="flex items-center justify-center">
          <ButtonForm children="Calcular" />
        </div>
      </form>
    </div>
  );
}

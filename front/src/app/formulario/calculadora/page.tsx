"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

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
  const [resposta, setResposta] = useState("");
  const [show, setShow] = useState(false);

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

    setShow(true);
  };

  return (
    <div className="border p-5 flex flex-col justify-center items-center">
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

      {show && (
        <div>
          <div className="flex flex-row gap-2">
            <p>Número de salas:</p> <p>{Object.values(resposta)[0]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Número cirúrgias/sala/dia:</p>{" "}
            <p>{Object.values(resposta)[1]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Processos de tecidos?:</p> <p>{Object.values(resposta)[2]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>As cirúrgias serão realizadas em quais dias da semana?:</p>{" "}
            <p>{Object.values(resposta)[3]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>
              Qual o interval o de pico de funcionamento / da CME (período de
              processamento de 90% do material?):
            </p>{" "}
            <p>{Object.values(resposta)[4]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Número leitos UTI:</p> <p>{Object.values(resposta)[5]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Número leitos Internação, RPA, Observações, HD...:</p>{" "}
            <p>{Object.values(resposta)[6]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Número de Autoclaves:</p> <p>{Object.values(resposta)[7]}</p>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <p>Número de Lavadoras Termo:</p>{" "}
            <p>{Object.values(resposta)[8]}</p>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

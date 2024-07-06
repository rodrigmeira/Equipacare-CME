"use client";

import { ButtonForm } from "@/components";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const WrapperForm = ({ children }: { children: React.ReactNode }) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    }
  };

  const handleDiasDeCirurgiasChange = (day: string) => {
    setDiasDeCirurgias((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-0 w-[1150px] items-center justify-center shadow-lg rounded-3xl overflow-hidden">
        <div className="bg-white rounded-3xl md:rounded-r-none md:w-full p-10 h-[790px] relative">
          {children}
        </div>
        <div className="h-[790px] bg-center bg-cover bg-bgHero md:w-full rounded-r-3xl md:flex hidden" />
      </div>
      <div className="md:col-span-2 flex items-center justify-center m-8">
        <ButtonForm className="w-[300px] h-[50px]">CALCULAR</ButtonForm>
      </div>
    </div>
  );
};

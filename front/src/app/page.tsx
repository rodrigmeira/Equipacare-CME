"use client";

import { ButtonForm, Progress, Step1, Step3 } from "@/components";
import { Step2 } from "@/components/Step2/Step2";
import { Step4 } from "@/components/Step4/Step4";
import { useContextCalc } from "@/context/ContextCalc";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(3);
  const [modelosAutoclaves, setModelosAutoclaves] = useState<any[]>([]);
  const [modelosLavadoras, setModelosLavadoras] = useState<any[]>([]);
  const {
    intervaloDePicoCME,
    numeroCirurgiasSalaDia,
    numeroLeitosHospitalDia,
    numeroLeitosInternacao,
    numeroLeitosObservacao,
    numeroLeitosRPA,
    numeroLeitosUTI,
    numeroSalasCirurgicas,
    setIntervaloDePicoCME,
    setNumeroCirurgiasSalaDia,
    setNumeroLeitosHospitalDia,
    setNumeroLeitosInternacao,
    setNumeroLeitosObservacao,
    setNumeroLeitosRPA,
    setNumeroLeitosUTI,
    setNumeroSalasCirurgicas,
  } = useContextCalc();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count === 1) {
      timer = setTimeout(() => setProgress(3), 300);
      return () => clearTimeout(timer);
    }
    if (count === 2) {
      timer = setTimeout(() => setProgress(33), 300);
      return () => clearTimeout(timer);
    }
    if (count === 3) {
      timer = setTimeout(() => setProgress(66), 300);
      return () => clearTimeout(timer);
    }
    if (count === 4) {
      timer = setTimeout(() => setProgress(100), 5000);
      return () => clearTimeout(timer);
    }
    console.log(progress);
  }, [count]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (count < 4) {
      setCount(count + 1);
    }

    if (count === 3) {
      const formData = {
        intervaloDePicoCME,
        numeroCirurgiasSalaDia,
        numeroLeitosHospitalDia,
        numeroLeitosInternacao,
        numeroLeitosObservacao,
        numeroLeitosRPA,
        numeroLeitosUTI,
        numeroSalasCirurgicas,
      };

      try {
        const calcResponse = await axios.post(
          "https://api-equipacare.vercel.app/calculadora/calcular-dados",
          formData
        );

        const resposta = calcResponse.data;
        setModelosAutoclaves(resposta[0][1]);
        setModelosLavadoras(resposta[1][1]);

        if (calcResponse.status === 200) {
          setIntervaloDePicoCME(0);
          setNumeroCirurgiasSalaDia(0);
          setNumeroLeitosHospitalDia(0);
          setNumeroLeitosInternacao(0);
          setNumeroLeitosObservacao(0);
          setNumeroLeitosRPA(0);
          setNumeroLeitosUTI(0);
          setNumeroSalasCirurgicas(0);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleGoBackToPreviousStep = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Progress
        value={progress}
        className="absolute top-0 left-0 w-full h-4 border-1 rounded-none"
      />
      <div className="flex flex-row gap-2 items-center">
        <button
          onClick={handleGoBackToPreviousStep}
          type="button"
          className={count > 1 ? "pointer" : "pointer hidden"}
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#8edd2a" }}
          />
        </button>

        <h3 className="text-base font-extralight">Step {count} of 4</h3>
      </div>
      {count <= 3 && (
        <h1 className="text-2xl font-bold">Preencha as informações</h1>
      )}
      <form onSubmit={handleSubmit}>
        {count > 3 && <h1 className="text-2xl font-bold">Resultados</h1>}
        {count > 3 && (
          <p className="text-[14px] font-normal">
            Confira as melhores ofertas para seu projeto!
          </p>
        )}
        {count === 1 && <Step1 />}
        {count === 2 && <Step2 />}
        {count === 3 && <Step3 />}
        {count === 4 && (
          <Step4
            modelosAutoclaves={modelosAutoclaves}
            modelosLavadoras={modelosLavadoras}
          />
        )}
        <div className="w-full flex justify-center mt-8">
          {count < 4 && <ButtonForm className="w-full max-w-xs">Próximo</ButtonForm>}
        </div>
      </form>
    </div>
  );
}

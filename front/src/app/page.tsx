"use client";

import { ButtonForm, Progress, Step1, Step3 } from "@/components";
import { Step2 } from "@/components/Step2/Step2";
import { Step4 } from "@/components/Step4/Step4";
import { useContextForm } from "@/context/Context";
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
  const [numeroAutoclaves, setNumeroAutoclaves] = useState<number>(0);
  const [numeroLavadoras, setNumeroLavadoras] = useState<number>(0);
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

  const {
    nomeCompleto,
    email,
    telefone,
    nomeHospital,
    cnpj,
    cargo,
    cep,
    numero,
    rua,
    bairro,
    cidade,
    uf,
    momentoEmpreendimento,
    possuiEngenharia,
    propriaOuTerceirizada,
    senteFalta,
    jaPossuiCME,
    seJaPossuiCME,
    diasDaSemana,
    tipoDeProcessamento,
  } = useContextForm();

  // useEffect(() => {
  //   console.log(modelosLavadoras);
  // }, [modelosLavadoras]);

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
        const formSheet = {
          Nome: nomeCompleto,
          Email: email,
          Contato: telefone,
          Hospital: nomeHospital,
          CNPJ: cnpj,
          Cargo: cargo,
          CEP: cep,
          Numero: numero,
          Rua: rua,
          Bairro: bairro,
          Cidade: cidade,
          UF: uf,
          Momento: momentoEmpreendimento,
          Engenharia: possuiEngenharia,
          Tipo: propriaOuTerceirizada,
          Comentários: senteFalta,
          CME: jaPossuiCME,
          Realizar: seJaPossuiCME,
          Dias: !diasDaSemana,
          "Tipo de processamento": tipoDeProcessamento,
          "Número salas cirurgicas": numeroSalasCirurgicas,
          "Número cirurgias/sala/dia": numeroCirurgiasSalaDia,
          "Intervalo de pico CME": intervaloDePicoCME,
          "Numero leitos UTI": numeroLeitosUTI,
          "Numero leitos Internação": numeroLeitosInternacao,
          "Numero leitos Observação": numeroLeitosObservacao,
          "Numero leitos RPA": numeroLeitosRPA,
          "Numero leitos Hospital/Dia": numeroLeitosHospitalDia,
        };

        await axios.post(
          "https://api.sheetmonkey.io/form/deY6rCECmL5H6wYtZoPaSP",
          formSheet
        );

        const calcResponse = await axios.post(
          "https://api-equipacare.vercel.app/calculadora/calcular-dados",
          formData
        );

        const resposta = calcResponse.data;
        setModelosAutoclaves(resposta[0][1]);
        setModelosLavadoras(resposta[1][1]);
        setNumeroAutoclaves(resposta[0][0]);
        setNumeroLavadoras(resposta[1][0]);

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

  const isStep1Valid = nomeCompleto && email && telefone && nomeHospital && cnpj && cargo && cep && numero && rua && bairro && cidade && uf;
  const isStep2Valid = momentoEmpreendimento && possuiEngenharia && (possuiEngenharia === "não" || propriaOuTerceirizada);

  const isNextButtonDisabled = count === 1 ? !isStep1Valid : count === 2 ? !isStep2Valid : count === 3 ? false : true;

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
            numeroAutoclaves={numeroAutoclaves}
            numeroLavadoras={numeroLavadoras}
          />
        )}
        <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 mb-16">
          {count < 4 && (
            <ButtonForm disabled={isNextButtonDisabled} className={isNextButtonDisabled ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""}>
              Próximo
            </ButtonForm>
          )}
          {count === 4 && null}
        </div>
      </form>
    </div>
  );
}

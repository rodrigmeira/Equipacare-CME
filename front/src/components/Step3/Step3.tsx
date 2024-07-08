"use client";

import { useContextCalc } from "@/context/ContextCalc";
import { InputForm } from "../InputForm/InputForm";
import { Label } from "../ui/label";
import { InputCheckbox } from "./InputCheckbox";
import { InputRadio } from "./InputRadio";

export const Step3 = () => {
  const {
    intervaloDePicoCME,
    setIntervaloDePicoCME,
    numeroSalasCirurgicas,
    setNumeroSalasCirurgicas,
    numeroCirurgiasSalaDia,
    setNumeroCirurgiasSalaDia,
    numeroLeitosUTI,
    setNumeroLeitosUTI,
    numeroLeitosInternacao,
    setNumeroLeitosInternacao,
    numeroLeitosRPA,
    setNumeroLeitosRPA,
    numeroLeitosObservacao,
    setNumeroLeitosObservacao,
    numeroLeitosHospitalDia,
    setNumeroLeitosHospitalDia,
  } = useContextCalc();

  return (
    <div className="flex flex-col gap-7 my-9">
      <InputRadio
        title="Hospital irá implementar uma nova CME ou já possui CME?"
        firstInput="vamosImplementar"
        firstChildren="Vamos implementar"
        secondInput="jaPossuo"
        secondChildren="Já possuo"
        name="possuiCME"
      />
      <InputRadio
        title="Se já possui uma CME, o que você deseja?"
        firstInput="ampliar"
        firstChildren="Ampliar"
        secondInput="jaPossuo"
        secondChildren="Substituir"
        name="ampliarSubstituir"
      />
      <InputCheckbox />

      <Label>
        Qual o horário de pico de funcionamento da CME{" "}
        <span className="font-bold">em horas</span>?
        <span className="text-sm text-[#8EDD2A]">
          (período de processamento de 90% do material)
        </span>
        <InputForm
          type="number"
          onChange={(e) => setIntervaloDePicoCME(Number(e.target.value))}
          value={intervaloDePicoCME}
          placeholder="Ex: 12"
        />
      </Label>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="number"
          onChange={(e) => setNumeroSalasCirurgicas(Number(e.target.value))}
          value={numeroSalasCirurgicas}
          placeholder="Ex. 12"
        >
          Número de salas cirúrgicas:
        </InputForm>

        <InputForm
          type="number"
          onChange={(e) => setNumeroCirurgiasSalaDia(Number(e.target.value))}
          value={numeroCirurgiasSalaDia}
          placeholder="Ex: 12"
        >
          Número cirurgias/sala/dia:
        </InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Ex. 12">Tipo de processamento:</InputForm>

        <InputForm
          type="number"
          onChange={(e) => setNumeroLeitosUTI(Number(e.target.value))}
          value={numeroLeitosUTI}
          placeholder="Ex: 12"
        >
          Número de leitos UTI:
        </InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="number"
          onChange={(e) => setNumeroLeitosInternacao(Number(e.target.value))}
          value={numeroLeitosInternacao}
          placeholder="Ex. 12"
        >
          Número de leitos internação:
        </InputForm>

        <InputForm
          type="number"
          onChange={(e) => setNumeroLeitosRPA(Number(e.target.value))}
          value={numeroLeitosRPA}
          placeholder="Ex: 12"
        >
          Número de leitos RPA:
        </InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="number"
          onChange={(e) => setNumeroLeitosObservacao(Number(e.target.value))}
          value={numeroLeitosObservacao}
          placeholder="Ex. 12"
        >
          Número de leitos Observações:
        </InputForm>

        <InputForm
          type="number"
          onChange={(e) => setNumeroLeitosHospitalDia(Number(e.target.value))}
          value={numeroLeitosHospitalDia}
          placeholder="Ex: 12"
        >
          Número de leitos Hospital Dia:
        </InputForm>
      </div>
    </div>
  );
};

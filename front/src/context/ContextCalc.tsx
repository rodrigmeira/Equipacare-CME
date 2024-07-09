"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ContextType {
  intervaloDePicoCME: number;
  setIntervaloDePicoCME: (intervaloDePicoCME: number) => void;
  numeroSalasCirurgicas: number;
  setNumeroSalasCirurgicas: (numeroSalasCirurgicas: number) => void;
  numeroCirurgiasSalaDia: number;
  setNumeroCirurgiasSalaDia: (numeroCirurgiasSalaDia: number) => void;
  numeroLeitosUTI: number;
  setNumeroLeitosUTI: (numeroLeitosUTI: number) => void;
  numeroLeitosInternacao: number;
  setNumeroLeitosInternacao: (numeroLeitosInternacao: number) => void;
  numeroLeitosRPA: number;
  setNumeroLeitosRPA: (numeroLeitosRPA: number) => void;
  numeroLeitosObservacao: number;
  setNumeroLeitosObservacao: (numeroLeitosObservacao: number) => void;
  numeroLeitosHospitalDia: number;
  setNumeroLeitosHospitalDia: (numeroLeitosHospitalDia: number) => void;
}

const ContextCalc = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const ProviderCalc = ({ children }: ProviderProps) => {
  const [intervaloDePicoCME, setIntervaloDePicoCME] = useState<number>(0);
  const [numeroSalasCirurgicas, setNumeroSalasCirurgicas] = useState<number>(0);
  const [numeroCirurgiasSalaDia, setNumeroCirurgiasSalaDia] =
    useState<number>(0);
  const [numeroLeitosUTI, setNumeroLeitosUTI] = useState<number>(0);
  const [numeroLeitosInternacao, setNumeroLeitosInternacao] =
    useState<number>(0);
  const [numeroLeitosRPA, setNumeroLeitosRPA] = useState<number>(0);
  const [numeroLeitosObservacao, setNumeroLeitosObservacao] =
    useState<number>(0);
  const [numeroLeitosHospitalDia, setNumeroLeitosHospitalDia] =
    useState<number>(0);

  return (
    <ContextCalc.Provider
      value={{
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
      }}
    >
      {children}
    </ContextCalc.Provider>
  );
};

export const useContextCalc = () => {
  const context = useContext(ContextCalc);
  if (context === undefined) {
    throw new Error("useContextForm must be used within a Provider");
  }
  return context;
};

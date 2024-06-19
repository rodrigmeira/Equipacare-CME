"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ContextType {
  nomeCompleto: string;
  setNomeCompleto: (nomeCompleto: string) => void;
  telefone: string;
  setTelefone: (telefone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  cepHospital: string;
  setCepHospital: (cepHospital: string) => void;
  cargo: string;
  setCargo: (cargo: string) => void;
  conhecimentoTecnico1: boolean;
  setConhecimentoTecnico1: (conhecimentoTecnico1: boolean) => void;
  conhecimentoTecnico2: boolean;
  setConhecimentoTecnico2: (conhecimentoTecnico2: boolean) => void;
}

const Context = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cepHospital, setCepHospital] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [conhecimentoTecnico1, setConhecimentoTecnico1] =
    useState<boolean>(false);
  const [conhecimentoTecnico2, setConhecimentoTecnico2] =
    useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        nomeCompleto,
        setNomeCompleto,
        telefone,
        setTelefone,
        email,
        setEmail,
        cepHospital,
        setCepHospital,
        cargo,
        setCargo,
        conhecimentoTecnico1,
        setConhecimentoTecnico1,
        conhecimentoTecnico2,
        setConhecimentoTecnico2,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextForm = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useContextForm most be used within a Provider");
  }
  return context;
};

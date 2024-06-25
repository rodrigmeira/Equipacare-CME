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
  nomeHospital: string;
  setNomeHospital: (nomeHospital: string) => void;
  endereco: string;
  setEndereco: (endereco: string) => void;
  cnpj: string;
  setCnpj: (cnpj: string) => void;
  possuiCME: boolean;
  setPossuiCME: (possuiCME: boolean) => void;
  implantarCME: boolean;
  setImplantarCME: (implantarCME: boolean) => void;
  ampliacao: boolean;
  setAmpliacao: (ampliacao: boolean) => void;
  substituicao: boolean;
  setSubstituicao: (substituicao: boolean) => void;
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
  const [nomeHospital, setNomeHospital] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [possuiCME, setPossuiCME] = useState<boolean>(false);
  const [implantarCME, setImplantarCME] = useState<boolean>(false);
  const [ampliacao, setAmpliacao] = useState<boolean>(false);
  const [substituicao, setSubstituicao] = useState<boolean>(false);

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
        nomeHospital,
        setNomeHospital,
        endereco,
        setEndereco,
        cnpj,
        setCnpj,
        possuiCME,
        setPossuiCME,
        implantarCME,
        setImplantarCME,
        ampliacao,
        setAmpliacao,
        substituicao,
        setSubstituicao,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextForm = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useContextForm must be used within a Provider");
  }
  return context;
};

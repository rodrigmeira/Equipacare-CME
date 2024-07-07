"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ContextType {
  nomeCompleto: string;
  setNomeCompleto: (nomeCompleto: string) => void;
  telefone: string;
  setTelefone: (telefone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  cargo: string;
  setCargo: (cargo: string) => void;
  nomeHospital: string;
  setNomeHospital: (nomeHospital: string) => void;
  cep: string;
  setCep: (cep: string) => void;
  numero: string;
  setNumero: (numero: string) => void;
  rua: string;
  setRua: (rua: string) => void;
  bairro: string;
  setBairro: (bairro: string) => void;
  cidade: string;
  setCidade: (cidade: string) => void;
  uf: string;
  setUf: (estado: string) => void;
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
  const [cargo, setCargo] = useState<string>("");
  const [nomeHospital, setNomeHospital] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [rua, setRua] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [uf, setUf] = useState<string>("");
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
        cargo,
        setCargo,
        nomeHospital,
        setNomeHospital,
        cep,
        setCep,
        numero,
        setNumero,
        rua,
        setRua,
        bairro,
        setBairro,
        cidade,
        setCidade,
        uf,
        setUf,
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

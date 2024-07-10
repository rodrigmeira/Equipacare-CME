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
  jaPossuiCME: string;
  setJaPossuiCME: (jaPossuiCME: string) => void;
  seJaPossuiCME: string;
  setSeJaPossuiCME: (seJaPossuiCME: string) => void;
  momentoEmpreendimento: string;
  setMomentoEmpreendimento: (momentoEmpreendimento: string) => void;
  possuiEngenharia: string;
  setPossuiEngenharia: (possuiEngenharia: string) => void;
  propriaOuTerceirizada: string;
  setPropriaOuTerceirizada: (propriaOuTerceirizada: string) => void;
  senteFalta: string;
  setSenteFalta: (senteFalta: string) => void;
  diasDaSemana: any;
  setDiasDaSemana: (diasDaSemana: any) => void;
  tipoDeProcessamento: string;
  setTipoDeProcessamento: (tipoDeProcessamento: string) => void;
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
  const [jaPossuiCME, setJaPossuiCME] = useState<string>("");
  const [seJaPossuiCME, setSeJaPossuiCME] = useState<string>("");
  const [momentoEmpreendimento, setMomentoEmpreendimento] =
    useState<string>("");
  const [possuiEngenharia, setPossuiEngenharia] = useState<string>("");
  const [propriaOuTerceirizada, setPropriaOuTerceirizada] =
    useState<string>("");
  const [senteFalta, setSenteFalta] = useState<string>("");
  const [diasDaSemana, setDiasDaSemana] = useState<any>({
    todosOsDias: false,
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
    domingo: false,
  });
  const [tipoDeProcessamento, setTipoDeProcessamento] = useState<string>("");

  return (
    <Context.Provider
      value={{
        // STEP1
        nomeCompleto,
        setNomeCompleto,
        email,
        setEmail,
        telefone,
        setTelefone,
        nomeHospital,
        setNomeHospital,
        cnpj,
        setCnpj,
        cargo,
        setCargo,
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

        // STEP2
        momentoEmpreendimento,
        setMomentoEmpreendimento,
        possuiEngenharia,
        setPossuiEngenharia,
        propriaOuTerceirizada,
        setPropriaOuTerceirizada,
        senteFalta,
        setSenteFalta,

        // STEP3

        jaPossuiCME,
        setJaPossuiCME,
        seJaPossuiCME,
        setSeJaPossuiCME,
        diasDaSemana,
        setDiasDaSemana,
        tipoDeProcessamento,
        setTipoDeProcessamento,
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

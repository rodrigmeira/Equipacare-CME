"use client";

import { useContextForm } from "@/context/Context";
import { insertMaskInCNPJ } from "@/utils/insertMaskCNPJ";
import { insertMaskInCep } from "@/utils/insertMaskInCep";
import { insertMaskInTel } from "@/utils/insertMaskInTel";
import { InputForm } from "../InputForm/InputForm";

import { useEffect } from "react";

export const Step1 = () => {
  const {
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
  } = useContextForm();

  useEffect(() => {
    const fetchAddress = async () => {
      if (cep.length === 9) {
        const cleanedCep = cep.replace(/\D/g, "");
        const response = await fetch(
          `https://viacep.com.br/ws/${cleanedCep}/json/`
        );
        const data = await response.json();
        if (!data.erro) {
          setRua(data.logradouro);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setUf(data.uf);
        }
      }
    };
    fetchAddress();
  }, [cep]);

  return (
    <div className="flex flex-col gap-5 my-9">
      <InputForm
        type="text"
        id="nomeCompleto"
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
        placeholder="Digite seu nome"
      >
        Nome Completo:
      </InputForm>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <InputForm
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
        >
          E-mail do Hospital:
        </InputForm>

        <InputForm
          type="text"
          id="telefone"
          value={insertMaskInTel(telefone)}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(00) 00000-0000"
          maxLength={14}
        >
          Contato:
        </InputForm>
      </div>
      <InputForm
        type="text"
        id="nomeHospital"
        value={nomeHospital}
        onChange={(e) => setNomeHospital(e.target.value)}
        placeholder="Digite o nome do hospital..."
      >
        Nome do hospital:
      </InputForm>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cnpj"
          value={insertMaskInCNPJ(cnpj)}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="00.000.000/0000-00"
          maxLength={18}
        >
          CNPJ:
        </InputForm>

        <InputForm
          type="text"
          id="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Ex: Diretor"
        >
          Cargo atual:
        </InputForm>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cep"
          value={insertMaskInCep(cep)}
          onChange={(e) => setCep(e.target.value)}
          placeholder="00000-000"
          maxLength={9}
        >
          CEP:
        </InputForm>

        <InputForm
          type="number"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ex: 12"
        >
          Número:
        </InputForm>
      </div>
      <InputForm
        type="text"
        id="rua"
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        placeholder="Digite o nome da rua..."
      >
        Rua:
      </InputForm>
      <InputForm
        type="text"
        id="bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        placeholder="Digite o nome do bairro..."
      >
        Bairro:
      </InputForm>

      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Digite a cidade..."
        >
          Cidade:
        </InputForm>

        <InputForm
          type="text"
          id="uf"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          placeholder="Digite o estado..."
        >
          UF:
        </InputForm>
      </div>
    </div>
  );
};

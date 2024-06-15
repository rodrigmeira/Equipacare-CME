"use client";

import { InputForm } from "@/components";
import Image from "next/image";
import { FormEvent, useState } from "react";

interface FormData {
  nomeCompleto: string;
  telefone: string;
  email: string;
  cepHospital: string;
  cargo: string;
  possuiConhecimentoTecnico1: boolean;
  possuiConhecimentoTecnico2: boolean;
}

export default function CadastroPage() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cepHospital, setCepHospital] = useState("");
  const [cargo, setCargo] = useState("");
  const [conhecimentoTecnico1, setConhecimentoTecnico1] = useState(false);
  const [conhecimentoTecnico2, setConhecimentoTecnico2] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="py-20 md:py-32 md:grid md:grid-cols-2 md:px-6 md:gap-8 md:justify-stretch w-11/12 md:w-4/5">
      <div>
        <form
          className="flex flex-col justify-center p-6 md:p-0"
          onSubmit={handleSubmit}
        >
          <InputForm
            type="text"
            id="nomeCompleto"
            placeholder="coloque seu nome aqui..."
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            required
          >
            Nome Completo
          </InputForm>

          <InputForm
            type="tel"
            id="telefone"
            placeholder="(00)00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            maxLength={14}
          >
            Telefone
          </InputForm>

          <InputForm
            type="email"
            id="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          >
            E-mail
          </InputForm>

          <div className="md:grid md:grid-cols-2 md:gap-4">
            <InputForm
              type="number"
              id="cepHospital"
              placeholder="00000-000"
              value={cepHospital}
              onChange={(e) => setCepHospital(e.target.value)}
              required
            >
              Cep do Hospital
            </InputForm>

            <InputForm
              type="text"
              id="cargo"
              placeholder="Ex.: Investidor"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
            >
              Cargo
            </InputForm>
          </div>

          <label
            htmlFor="nivelTecnico"
            className="font-semibold text-base mb-2"
          >
            Nível de conhecimento técnico:
          </label>
          <div id="nivelTecnico" className="flex flex-col gap-2 mb-8">
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                id="possuiConhecimentoTecnico1"
                checked={conhecimentoTecnico1}
                onChange={(e) => setConhecimentoTecnico1(e.target.checked)}
                className="size-5 accent-color-primary"
              />
              <label
                className="font-semibold ml-2"
                htmlFor="possuiConhecimentoTecnico1"
              >
                Possuo conhecimento técnico
              </label>
            </div>
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                id="possuiConhecimentoTecnico2"
                checked={conhecimentoTecnico2}
                onChange={(e) => setConhecimentoTecnico2(e.target.checked)}
                className="size-5 accent-color-primary"
              />

              <label
                className="font-semibold ml-2"
                htmlFor="possuiConhecimentoTecnico2"
              >
                Sou apenas investidor
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="border bg-color-primary hover:bg-color-primary-focus font-semibold tracking-widest text-slate-50 py-2 px-5 rounded-lg"
          >
            Avançar
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/HeroImage.png"
          alt="Imagem de cadastro"
          width={450}
          height={1500}
          className="hidden md:flex"
        />
      </div>
    </div>
  );
}

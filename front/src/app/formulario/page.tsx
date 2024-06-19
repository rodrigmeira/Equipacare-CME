"use client";

import { ButtonForm, InputForm } from "@/components";
import { useContextForm } from "@/context/Context";
import { insertMaskInCep } from "@/utils/insertMaskInCep";
import { insertMaskInTel } from "@/utils/insertMaskInTel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function CadastroPage() {
  const {
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
  } = useContextForm();

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/formulario/calculadora");
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
            children="Nome Completo"
          />

          <InputForm
            type="text"
            id="telefone"
            placeholder="(00)00000-0000"
            value={insertMaskInTel(telefone)}
            onChange={(e) => setTelefone(e.target.value)}
            required
            maxLength={14}
            minLength={13}
            children="Telefone"
          />

          <InputForm
            type="email"
            id="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            children="E-mail"
          />

          <div className="md:grid md:grid-cols-2 md:gap-4">
            <InputForm
              type="text"
              id="cepHospital"
              placeholder="00000-000"
              value={insertMaskInCep(cepHospital)}
              onChange={(e) => setCepHospital(e.target.value)}
              maxLength={9}
              minLength={9}
              required
              children="Cep do Hospital"
            />

            <InputForm
              type="text"
              id="cargo"
              placeholder="Ex.: Investidor"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
              children="Cargo"
            />
          </div>

          <label
            htmlFor="nivelTecnico"
            className="font-semibold text-base mb-2 select-none"
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

          <ButtonForm children="Avançar" />
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

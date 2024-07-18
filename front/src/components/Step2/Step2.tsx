"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useContextForm } from "@/context/Context";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

export const Step2 = () => {
  const {
    momentoEmpreendimento,
    setMomentoEmpreendimento,
    possuiEngenharia,
    setPossuiEngenharia,
    propriaOuTerceirizada,
    setPropriaOuTerceirizada,
    senteFalta,
    setSenteFalta,
  } = useContextForm();

  const [charCount, setCharCount] = useState(0);

  const handleTextareaChange = (e: { target: { value: any; }; }) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setSenteFalta(text);
      setCharCount(text.length);
    }
  };

  return (
    <div className="flex flex-col gap-6 my-6">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <Label>Qual é o momento atual do empreendimento?</Label>
        <Select
          onValueChange={(value: string) => setMomentoEmpreendimento(value)}
          value={momentoEmpreendimento}
          
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Selecione uma opção..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Elaboração de projetos">
              Elaboração de projetos
            </SelectItem>
            <SelectItem value="Visita técnica para avaliação diagnóstica">
              Visita técnica para avaliação diagnóstica
            </SelectItem>
            <SelectItem value="Dimensionamento e especificação técnica dos equipamentos">
              Dimensionamento e especificação técnica dos equipamentos
            </SelectItem>
            <SelectItem value="Análise técnica financeira comparativa dos equipamentos">
              Análise técnica financeira comparativa dos equipamentos
            </SelectItem>
            <SelectItem value="Comissionamento das instalações">
              Comissionamento das instalações
            </SelectItem>
            <SelectItem value="Outro momento">Outro momento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col mt-4">
        <Label>
          Possui engenharia clínica para apoiar o processo de seleção dos
          equipamentos?
        </Label>
        <RadioGroup
          onValueChange={(value: string) => setPossuiEngenharia(value)}
          value={possuiEngenharia}
          className="flex mt-4 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sim" id="sim" />
            <Label className="text-sm" htmlFor="sim">
              Sim
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="não" id="não" />
            <Label className="text-sm" htmlFor="não">
              Não
            </Label>
          </div>
        </RadioGroup>
      </div>

      {possuiEngenharia === "sim" && (
        <div className="flex flex-col mt-4">
          <Label>Sua engenharia clínica é própria ou terceirizada?</Label>
          <RadioGroup
            onValueChange={(value: string) => setPropriaOuTerceirizada(value)}
            value={propriaOuTerceirizada}
            className="flex mt-4 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Própria" id="Própria" />
              <Label className="text-sm" htmlFor="Própria">
                Própria
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Terceirizada" id="Terceirizada" />
              <Label className="text-sm" htmlFor="Terceirizada">
                Terceirizada
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}

      <div className="flex flex-col my-4">
        <Label className="mb-4">
          Nos conte do que sente mais falta no suporte da engenharia clínica:
          <span className="text-sm text-[#8EDD2A]">(opcional)</span>
        </Label>
        <Textarea
          onChange={handleTextareaChange}
          value={senteFalta}
          placeholder="Escreva aqui..."
        />
        <div className="text-right text-sm text-gray-500 mt-1">
          {charCount} / 500 caracteres
        </div>
      </div>
    </div>
  );
};

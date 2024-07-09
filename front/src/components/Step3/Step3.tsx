import { InputForm } from "../InputForm/InputForm";
import { Label } from "../ui/label";
import { InputCheckbox } from "./InputCheckbox";
import { InputRadio } from "./InputRadio";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export const Step3 = () => {
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
        <InputForm placeholder="Ex: 12" />
      </Label>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Ex. 12">Número de salas cirúrgias:</InputForm>

        <InputForm placeholder="Ex: 12">Número cirurgias/sala/dia:</InputForm>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
        <div className="flex flex-col w-full lg:w-1/2">
          <Label className="mb-[8.7px]">Tipo de processamento?</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecione uma opção..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Elaboração de projetos">Tecido</SelectItem>
              <SelectItem value="Visita técnica para avaliação diagnóstica">
                Instrumental
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Label>Número de leitos UTI:</Label>
          <InputForm className="mt-1" placeholder="Ex: 12" />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Ex. 12">Número de leitos internação:</InputForm>

        <InputForm placeholder="Ex: 12">Número de leitos RPA:</InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Ex. 12">
          Número de leitos Observações:
        </InputForm>

        <InputForm placeholder="Ex: 12">
          Número de leitos Hospital Dia:
        </InputForm>
      </div>
    </div>
  );
};

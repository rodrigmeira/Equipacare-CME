import { InputForm } from "../InputForm/InputForm";
import { Label } from "../ui/label";
import { InputCheckbox } from "./InputCheckbox";
import { InputRadio } from "./InputRadio";

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
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Ex. 12">Tipo de processamento:</InputForm>

        <InputForm placeholder="Ex: 12">Número de leitos UTI:</InputForm>
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

import { InputForm } from "../InputForm/InputForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";

export const Step2 = () => {
  return (
    <div className="mt-5">
      <Label>
        Qual é o momento atual do empreendimento?
      </Label>
      <Select>
        <SelectTrigger className="mt-1">
          <SelectValue placeholder="Selecione uma opção..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Elaboração de projetos</SelectItem>
          <SelectItem value="option-2">
            Visita técnica para avaliação diagnóstica
          </SelectItem>
          <SelectItem value="option-3">
            Dimensionamento e especificação técnica dos equipamentos
          </SelectItem>
          <SelectItem value="option-4">
            Análise técnica financeira comparativa dos equipamentos
          </SelectItem>
          <SelectItem value="option-5">
            Comissionamento das instalações
          </SelectItem>
          <SelectItem value="option-6">Outro momento</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex flex-col mt-4">
        <Label>
          Possui engenharia clínica para apoiar o processo de seleção dos
          equipamentos?
        </Label>
        <RadioGroup className="flex mt-4 gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sim" id="sim" />
            <Label className="text-sm" htmlFor="sim">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="não" id="não" />
            <Label className="text-sm" htmlFor="não">Não</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col mt-4">
        <Label>Sua engenharia clínica é própria ou terceirizada?</Label>
        <RadioGroup className="flex mt-4 gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Própria" id="Própria" />
            <Label className="text-sm" htmlFor="Própria">Própria</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Terceirizada" id="Terceirizada" />
            <Label className="text-sm" htmlFor="Terceirizada">Terceirizada</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col mt-4 mb-4">
        <Label className="mb-2">
        Nos conte do que sente mais falta no suporte da engenharia clínica:
        <span className="text-sm text-[#8EDD2A]">(opcional)</span>
        </Label>
        <Textarea placeholder="Escreva aqui..." />
      </div>
    </div>
  );
};

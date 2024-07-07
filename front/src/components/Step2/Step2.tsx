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

export const Step2 = () => {
  const { momentoEmpreendimento, setMomentoEmpreendimento } = useContextForm();
  return (
    <div className="flex flex-col gap-6 my-6">
      <div className="flex flex-col gap-4">
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
        <RadioGroup className="flex mt-4 gap-4">
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
      <div className="flex flex-col mt-4">
        <Label>Sua engenharia clínica é própria ou terceirizada?</Label>
        <RadioGroup className="flex mt-4 gap-4">
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
      <div className="flex flex-col my-4">
        <Label className="mb-4">
          Nos conte do que sente mais falta no suporte da engenharia clínica:
          <span className="text-sm text-[#8EDD2A]">(opcional)</span>
        </Label>
        <Textarea placeholder="Escreva aqui..." />
      </div>
    </div>
  );
};

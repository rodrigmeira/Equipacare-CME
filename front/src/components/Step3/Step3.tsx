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
      <InputCheckbox
        title="As cirurgias serão realizadas em quais dias da semana?"
        propsOption1="todosOsDias"
        childrenOption1="Todos os dias"
        propsOption2="segundaFeira"
        childrenOption2="Segunda-feira"
        propsOption3="tercaFeira"
        childrenOption3="Terça-feira"
        propsOption4="quartaFeira"
        childrenOption4="Quarta-feira"
        propsOption5="quintaFeira"
        childrenOption5="Quinta-feira"
        propsOption6="sextaFeira"
        childrenOption6="Sexta-feira"
        propsOption7="sabado"
        childrenOption7="Sábado"
        propsOption8="domingo"
        childrenOption8="Domingo"
      />
    </div>
  );
};

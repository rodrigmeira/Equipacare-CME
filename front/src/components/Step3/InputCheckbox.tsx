import { EachInputCheckbox } from "./EachInputCheckbox";
import { H3 } from "./H3";

export const InputCheckbox = () => {
  return (
    <div className="select-none font-extralight">
      <H3>As cirurgias serão realizadas em quais dias da semana?</H3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <EachInputCheckbox id="todosOsDias">Todos os dias</EachInputCheckbox>

          <EachInputCheckbox id="segundaFeira">Segunda-feira</EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id="tercaFeira">Terça-feira</EachInputCheckbox>

          <EachInputCheckbox id="quartaFeira">Quarta-feira</EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id="quitaFeira">Quinta-feira</EachInputCheckbox>

          <EachInputCheckbox id="sextaFeira">Sexta-feira</EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id="sabado">Sábado</EachInputCheckbox>

          <EachInputCheckbox id="domingo">Domingo</EachInputCheckbox>
        </div>
      </div>
    </div>
  );
};

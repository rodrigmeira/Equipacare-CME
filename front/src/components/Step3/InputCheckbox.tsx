"use client";

import { useContextForm } from "@/context/Context";
import { useEffect } from "react";
import { EachInputCheckbox } from "./EachInputCheckbox";
import { H3 } from "./H3";

export const InputCheckbox = () => {
  const { diasDaSemana, setDiasDaSemana } = useContextForm();

  // console.log(diasDaSemana);

  useEffect(() => {
    console.log(diasDaSemana);
  }, [diasDaSemana]);

  return (
    <div className="select-none font-extralight">
      <H3>As cirurgias serão realizadas em quais dias da semana?</H3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: !diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="todosOsDias"
          >
            Todos os dias
          </EachInputCheckbox>

          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: !diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="segundaFeira"
          >
            Segunda-feira
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: !diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="tercaFeira"
          >
            Terça-feira
          </EachInputCheckbox>

          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: !diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="quartaFeira"
          >
            Quarta-feira
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: !diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="quitaFeira"
          >
            Quinta-feira
          </EachInputCheckbox>

          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: !diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="sextaFeira"
          >
            Sexta-feira
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: !diasDaSemana.sabado,
                domingo: diasDaSemana.domingo,
              })
            }
            id="sabado"
          >
            Sábado
          </EachInputCheckbox>

          <EachInputCheckbox
            onClick={() =>
              setDiasDaSemana({
                todosOsDias: diasDaSemana.todosOsDias,
                segunda: diasDaSemana.segunda,
                terca: diasDaSemana.terca,
                quarta: diasDaSemana.quarta,
                quinta: diasDaSemana.quinta,
                sexta: diasDaSemana.sexta,
                sabado: diasDaSemana.sabado,
                domingo: !diasDaSemana.domingo,
              })
            }
            id="domingo"
          >
            Domingo
          </EachInputCheckbox>
        </div>
      </div>
    </div>
  );
};

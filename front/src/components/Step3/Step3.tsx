import { H3 } from "./H3";
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
      <div className="select-none font-extralight">
        <H3>As cirurgias serão realizadas em quais dias da semana?</H3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <label
              className="relative flex items-center mb-2"
              htmlFor="todosOsDias"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="todosOsDias"
                id="todosOsDias"
              />
              <span className="ml-2 text-sm">Todos os dias</span>
            </label>

            <label
              className="relative flex items-center mb-2"
              htmlFor="segundaFeira"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="segundaFeira"
                id="segundaFeira"
              />
              <span className="ml-2 text-sm">Segunda-feira</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className="relative flex items-center mb-2"
              htmlFor="tercaFeira"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="tercaFeira"
                id="tercaFeira"
              />
              <span className="ml-2 text-sm">Terça-feira</span>
            </label>

            <label
              className="relative flex items-center mb-2"
              htmlFor="quartaFeira"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="quartaFeira"
                id="quartaFeira"
              />
              <span className="ml-2 text-sm">Quarta-feira</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className="relative flex items-center mb-2"
              htmlFor="quintaFeira"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="quintaFeira"
                id="quintaFeira"
              />
              <span className="ml-2 text-sm">Quinta-feira</span>
            </label>

            <label
              className="relative flex items-center mb-2"
              htmlFor="sextaFeira"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="sextaFeira"
                id="sextaFeira"
              />
              <span className="ml-2 text-sm">Sexta-feira</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="relative flex items-center mb-2" htmlFor="Sabado">
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="Sabado"
                id="Sabado"
              />
              <span className="ml-2 text-sm">Sabado</span>
            </label>

            <label
              className="relative flex items-center mb-2"
              htmlFor="domingo"
            >
              <input
                className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:-left-12 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
                type="checkbox"
                name="domingo"
                id="domingo"
              />
              <span className="ml-2 text-sm">Domingo</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

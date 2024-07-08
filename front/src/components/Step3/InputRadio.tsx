"use client";

import { useContextForm } from "@/context/Context";
import { EachInputRadio } from "./EachInputRadio";
import { H3 } from "./H3";

type InputRadioProps = {
  title: string;
  firstInput: string;
  secondInput: string;
  firstChildren: string;
  secondChildren: string;
  name: string;
};

export const InputRadio = ({
  title,
  firstInput,
  secondInput,
  firstChildren,
  secondChildren,
  name,
}: InputRadioProps) => {
  const { setJaPossuiCME, setSeJaPossuiCME } = useContextForm();

  // Testa se os inputs estão passando os valores corretamente para o useContext
  // useEffect(() => {
  //   console.log(jaPossuiCME);
  // }, [jaPossuiCME]);

  // useEffect(() => {
  //   console.log(seJaPossuiCME);
  // }, [seJaPossuiCME]);

  return (
    <div className="font-extralight select-none">
      <H3>{title}</H3>
      <div className="flex flex-row gap-5">
        <EachInputRadio
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === firstChildren) {
              setJaPossuiCME(e.target.value);
            }
            if (e.target.value === secondChildren) {
              setSeJaPossuiCME(e.target.value);
            }
          }}
          value={firstChildren}
          id={firstInput}
          name={name}
        >
          {firstChildren}
        </EachInputRadio>
        <EachInputRadio
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === firstChildren) {
              setJaPossuiCME(e.target.value);
            }
            if (e.target.value === secondChildren) {
              setSeJaPossuiCME(e.target.value);
            }
          }}
          value={secondChildren}
          id={secondInput}
          name={name}
        >
          {secondChildren}
        </EachInputRadio>
      </div>
    </div>
  );
};

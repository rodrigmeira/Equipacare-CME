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
  return (
    <div className="font-extralight select-none">
      <H3>{title}</H3>
      <div className="flex flex-row gap-5">
        <EachInputRadio id={firstInput} name={name}>
          {firstChildren}
        </EachInputRadio>
        <EachInputRadio id={secondInput} name={name}>
          {secondChildren}
        </EachInputRadio>
      </div>
    </div>
  );
};

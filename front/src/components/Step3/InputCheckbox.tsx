import { EachInputCheckbox } from "./EachInputCheckbox";
import { H3 } from "./H3";

type InputCheckboxProps = {
  title: string;
  propsOption1: string;
  propsOption2: string;
  propsOption3: string;
  propsOption4: string;
  propsOption5: string;
  propsOption6: string;
  propsOption7: string;
  propsOption8: string;
  childrenOption1: string;
  childrenOption2: string;
  childrenOption3: string;
  childrenOption4: string;
  childrenOption5: string;
  childrenOption6: string;
  childrenOption7: string;
  childrenOption8: string;
};

export const InputCheckbox = ({
  title,
  childrenOption1,
  childrenOption2,
  childrenOption3,
  childrenOption4,
  childrenOption5,
  childrenOption6,
  childrenOption7,
  childrenOption8,
  propsOption1,
  propsOption2,
  propsOption3,
  propsOption4,
  propsOption5,
  propsOption6,
  propsOption7,
  propsOption8,
}: InputCheckboxProps) => {
  return (
    <div className="select-none font-extralight">
      <H3>{title}</H3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <EachInputCheckbox id={propsOption1}>
            {childrenOption1}
          </EachInputCheckbox>

          <EachInputCheckbox id={propsOption2}>
            {childrenOption2}
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id={propsOption3}>
            {childrenOption3}
          </EachInputCheckbox>

          <EachInputCheckbox id={propsOption4}>
            {childrenOption4}
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id={propsOption5}>
            {childrenOption5}
          </EachInputCheckbox>

          <EachInputCheckbox id={propsOption6}>
            {childrenOption6}
          </EachInputCheckbox>
        </div>
        <div className="flex flex-col">
          <EachInputCheckbox id={propsOption7}>
            {childrenOption7}
          </EachInputCheckbox>

          <EachInputCheckbox id={propsOption8}>
            {childrenOption8}
          </EachInputCheckbox>
        </div>
      </div>
    </div>
  );
};

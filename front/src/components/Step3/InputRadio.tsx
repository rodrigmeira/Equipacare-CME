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
    <div className="font-extralight">
      <h3 className="mb-2 text-base">{title}</h3>
      <div className="flex flex-row gap-5">
        <div className="flex justify-center items-center">
          <input className="size-4" type="radio" id={firstInput} name={name} />
          <label className="ml-2 text-sm" htmlFor={firstInput}>
            {firstChildren}
          </label>
        </div>
        <div className="flex justify-center items-center">
          <input className="size-4" type="radio" id={secondInput} name={name} />
          <label className="ml-2 text-sm" htmlFor={secondInput}>
            {secondChildren}
          </label>
        </div>
      </div>
    </div>
  );
};

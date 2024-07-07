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
      <h3 className="mb-2 text-base select-none">{title}</h3>
      <div className="flex flex-row gap-5">
        <div className="flex justify-center items-center">
          <input
            className="size-4 appearance-none border border-black rounded-full before:content-[''] before:block before:size-[10px] before:translate-y-[2.3px] before:bg-white before:rounded-full before:m-auto before:transition-colors before:duration-300 before:ease-in-out checked:before:bg-second select-none"
            type="radio"
            id={firstInput}
            name={name}
          />
          <label className="ml-2 text-sm select-none" htmlFor={firstInput}>
            {firstChildren}
          </label>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="size-4 appearance-none border border-black rounded-full before:content-[''] before:block before:size-[10px] before:translate-y-[2.3px] before:bg-white before:rounded-full before:m-auto before:transition-colors before:duration-300 before:ease-in-out checked:before:bg-second  select-none"
            type="radio"
            id={secondInput}
            name={name}
          />
          <label className="ml-2 text-sm select-none" htmlFor={secondInput}>
            {secondChildren}
          </label>
        </div>
      </div>
    </div>
  );
};

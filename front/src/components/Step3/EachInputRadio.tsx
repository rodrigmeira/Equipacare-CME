type EachInputRadioProps = React.ComponentProps<"input">;

export const EachInputRadio = ({
  children,
  id,
  ...props
}: EachInputRadioProps) => {
  return (
    <div className="flex justify-center items-center">
      <input
        className="size-4 appearance-none border border-black rounded-full before:content-[''] before:block before:size-[10px] before:translate-y-[2.3px] before:bg-white before:rounded-full before:m-auto before:transition-colors before:duration-300 before:ease-in-out checked:before:bg-second select-none"
        type="radio"
        {...props}
      />
      <label className="ml-2 text-sm select-none" htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

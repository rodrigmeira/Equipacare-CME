type EachInputCheckboxProps = React.ComponentProps<"input">;

export const EachInputCheckbox = ({
  children,
  id,
  ...props
}: EachInputCheckboxProps) => {
  return (
    <label className=" flex items-center mb-2" htmlFor={id}>
      <div className="relative">
        <input
          className="appearance-none size-4 border border-gray-300 rounded before:content-[''] before:block before:w-full before:h-full before:bg-white before:rounded checked:before:bg-second checked:after:content-['✔'] checked:after:absolute checked:after:-top-[2px] checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white"
          type="checkbox"
          name={id}
          {...props}
        />
      </div>
      <span className="ml-2 text-sm">{children}</span>
    </label>
  );
};

type InputFormProps = React.ComponentProps<"input">;

export const InputForm = ({
  id,
  children,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="font-light text-base mb-2 select-none">
        {children}
      </label>
      <input
        className={`w-full border placeholder-[#d8d8d8] rounded-md border-color-primary focus:outline-color-primary-focus py-2 px-4 ${className}`}
        {...props}
      />
    </div>
  );
};

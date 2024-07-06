type InputFormProps = React.ComponentProps<"input">;

export const InputForm = ({
  id,
  children,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div className="flex flex-col mb-6 w-full">
      <label htmlFor={id} className="font-semibold text-base mb-2 select-none">
        {children}
      </label>
      <input
        className={`w-full border-2 rounded-md border-color-primary focus:outline-color-primary-focus py-2 px-4 ${className}`}
        {...props}
      />
    </div>
  );
};

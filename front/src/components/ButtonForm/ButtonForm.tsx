type ButtonFormProps = React.ComponentProps<"button">;

export const ButtonForm = ({
  children,
  className,
  ...props
}: ButtonFormProps) => {
  return (
    <button
      type="submit"
      className={`border bg-color-primary hover:bg-color-primary-focus font-semibold tracking-widest text-slate-50 py-2 px-5 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

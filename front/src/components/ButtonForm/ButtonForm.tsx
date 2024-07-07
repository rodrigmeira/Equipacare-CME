type ButtonFormProps = React.ComponentProps<"button">;

export const ButtonForm = ({
  children,
  className,
  ...props
}: ButtonFormProps) => {
  return (
    <button
      type="submit"
      className={`border bg-prima hover:bg-second transition duration-500 ease-in-out font-semibold tracking-widest text-base text-white py-2 px-20 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

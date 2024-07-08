type ButtonResultProps = React.ComponentProps<"button">;

export const ButtonResult = ({
  children,
  className,
  ...props
}: ButtonResultProps) => {
  return (
    <button
      type="submit"
      className={`border bg-prima hover:bg-second duration-300 ease-in-out font-semibold tracking-widest text-base text-white py-2 px-20 rounded-lg select-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

import React from "react";

type ButtonFormProps = React.ComponentProps<"button">;

export const ButtonForm = ({
  children,
  className,
  disabled,
  ...props
}: ButtonFormProps) => {
  return (
    <button
      type="submit"
      className={`border font-semibold tracking-widest text-base py-2 px-20 rounded-lg select-none ${
        disabled ? "bg-gray-200 cursor-not-allowed" : "bg-prima hover:bg-second text-white"
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

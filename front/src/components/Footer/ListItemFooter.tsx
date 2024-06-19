type ListItemFooterProps = React.ComponentProps<"li">;

export const ListItemFooter = ({ children, ...props }: ListItemFooterProps) => {
  return (
    <li
      className="text-[#D3F842] font-extralight hover:underline hover:text-black hover:font-light cursor-pointer antialiased"
      {...props}
    >
      {children}
    </li>
  );
};

type ListItemFooterProps = React.ComponentProps<"li">;

export const ListItemFooter = ({ children, ...props }: ListItemFooterProps) => {
  return (
    <li className="text-[#D3F842]" {...props}>
      {children}
    </li>
  );
};

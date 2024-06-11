type ListItemProps = React.ComponentProps<"li">;

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <li className="text-[#D3F842]" {...props}>
      {children}
    </li>
  );
};

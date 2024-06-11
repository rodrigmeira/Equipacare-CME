type SubTitleFooterProps = React.ComponentProps<"h3">;

export const SubTitleFooter = ({ children, ...props }: SubTitleFooterProps) => {
  return (
    <h3 className="text-white font-bold text-lg" {...props}>
      {children}
    </h3>
  );
};

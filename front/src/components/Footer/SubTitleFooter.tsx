type SubTitleFooterProps = React.ComponentProps<"h3">;

export const SubTitleFooter = ({ children, ...props }: SubTitleFooterProps) => {
  return (
    <h3 className="text-slate-200 font-bold text-xl mb-4" {...props}>
      {children}
    </h3>
  );
};

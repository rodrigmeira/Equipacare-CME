type BannerProps = React.ComponentProps<"div">;

export const Banner = ({ children, ...props }: BannerProps) => {
  return (
    <div
      className="w-full h-[400px] bg-center bg-cover flex flex-col justify-center items-center"
      {...props}
    >
      {children}
    </div>
  );
};

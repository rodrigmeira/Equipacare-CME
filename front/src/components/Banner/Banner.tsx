type BannerProps = React.ComponentProps<"div">;

export const Banner = ({ children, ...props }: BannerProps) => {
  return (
    <div
      className="w-full md:h-[400px] h-72 bg-center bg-cover flex flex-col justify-center items-center p-5 text-center"
      {...props}
    >
      {children}
    </div>
  );
};

export const CopyForm = ({ h1, p }: { h1: string; p: string }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white transform translate-y-6">
      <h1 className="font-bold md:text-[50px] text-4xl md:mb-0 mb-2">{h1}</h1>
      <p className="font-bold md:text-2xl text-xl">{p}</p>
    </div>
  );
};

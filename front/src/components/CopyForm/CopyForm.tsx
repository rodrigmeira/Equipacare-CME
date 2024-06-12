export const CopyForm = ({ h1, p }: { h1: string; p: string }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white transform translate-y-6">
      <h1 className="font-bold text-[50px]">{h1}</h1>
      <p className="font-bold text-2xl">{p}</p>
    </div>
  );
};

"use client";

export const WrapperForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-24">
      <div className="grid md:grid-cols-2 gap-0 lg:w-[1150px] md:h-[1050px] w-[98%] h-[1300px] items-center justify-center shadow-lg rounded-3xl overflow-hidden">
        <div className="bg-white rounded-3xl md:rounded-r-none md:w-full p-10 h-full relative">
          {children}
        </div>
        <div className="h-64 md:h-full lg:bg-center lg:bg-cover lg:bg-bgHero md:w-full rounded-r-3xl md:flex hidden" />
      </div>
    </div>
  );
};

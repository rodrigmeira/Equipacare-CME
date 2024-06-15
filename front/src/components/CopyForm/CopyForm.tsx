"use client";

import { usePathname } from "next/navigation";

export const CopyForm = ({ h1, p }: { h1: string; p: string }) => {
  const pathName = usePathname();
  const pathForm = pathName === "/formulario";
  const pathCalculadora = pathName === "/formulario/calculadora";

  return (
    <div className="flex flex-col justify-center items-center text-white transform translate-y-6 drop-shadow-h1Banner">
      <h1 className="font-bold md:text-[50px] text-4xl md:mb-4 mb-2">{h1}</h1>
      {pathForm && <p className="font-bold text-xl">{p}</p>}
      {pathCalculadora && (
        <p className="font-bold md:text-xl text-base md:w-11/12">{p}</p>
      )}
    </div>
  );
};

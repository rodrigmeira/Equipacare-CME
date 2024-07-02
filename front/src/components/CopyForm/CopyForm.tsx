"use client";

import { usePathname } from "next/navigation";

export const CopyForm = ({ h1, p }: { h1: string; p: string }) => {
  const pathName = usePathname();
  const pathForm = pathName === "/formulario";
  const pathCalculadora = pathName === "/formulario/calculadora";
  const pathResultado = pathName === "/formulario/resultado";

  return (
    <div className="flex flex-col justify-center items-center text-white transform translate-y-6 drop-shadow-h1Banner">
      <h1 className="font-bold md:text-[50px] text-4xl md:mb-4 mb-2 select-none">
        {h1}
      </h1>
      {pathForm && <p className="font-bold text-xl">{p}</p>}
      {(pathCalculadora || pathResultado) && (
        <p className="font-bold md:text-xl text-base md:w-11/12 select-none max-w-3xl text-justify">
          {p}
        </p>
      )}
    </div>
  );
};

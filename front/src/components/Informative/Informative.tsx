import Image from "next/image";

export const Informative = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-10  w-11/12 md:w-4/5">
        <div className="relative mb-10 w-full h-56">
          <Image
            src="/form-calc.jpg"
            alt="Imagem de fundo"
            className="object-cover w-full h-full rounded-3xl shadow-lg"
            layout="fill"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-[#00132999] flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-xl md:text-4xl font-bold">
              Preencha o formulário para ter acesso a calculadora
            </h1>
            <h3 className="text-base md:text-2xl mt-4">
              Com alguns dados nossa calculadora te entrega uma estimativa da
              quantidade e quais equipamentos são ideais para atender melhor seu
              hospital, de maneira fácil e rápida.
            </h3>
            <span className="text-xs md:text-sm mt-2">
              Obs: a ferramenta tem suas limitações, para uma estimativa mais
              precisa entre em contato com nossa equipe de vendedores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

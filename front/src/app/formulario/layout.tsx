"use client";

import { Banner, CopyForm } from "@/components";
import { Provider } from "@/context/Context";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {pathName === "/formulario" && (
        <Banner
          style={{
            backgroundImage: "url(/image-formulario.png)",
          }}
        >
          <CopyForm
            h1="FORMULARIO"
            p="PREENCHA PARA CONTINUARMOS O ATENDIMENTO"
          />
        </Banner>
      )}

      {pathName === "/formulario/calculadora" && (
        <Banner
          style={{
            backgroundImage: "url(/image-calculadora.png)",
          }}
        >
          <CopyForm
            h1="CALCULADORA"
            p="O material utilizado em hospitais exige certo conhecimento e experiencia na área. Esta ferramenta irá ajudar a estimar o volume diário de material"
          />
        </Banner>
      )}

      {pathName === "/formulario/resultado" && (
        <Banner
          style={{
            backgroundImage: "url(/image-calculadora.png)",
          }}
        >
          <CopyForm
            h1="CALCULADORA"
            p="O material utilizado em hospitais exige certo conhecimento e experiencia na área. Esta ferramenta irá ajudar a estimar o volume diário de material"
          />
        </Banner>
      )}

      <Provider>{children}</Provider>
    </div>
  );
}

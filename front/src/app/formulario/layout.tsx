import { Banner, CopyForm } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Banner style={{ backgroundImage: "url(/image-formulario.png)" }}>
        <CopyForm
          h1="FORMULARIO"
          p="PREENCHA PARA CONTINUARMOS O ATENDIMENTO"
        />
      </Banner>
      {children}
    </div>
  );
}

import { Banner, CopyForm } from "@/components";
import { Provider } from "@/context/Context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <Banner
        style={{
          backgroundImage: "url(/image-formulario.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <CopyForm
          h1="FORMULARIO"
          p="PREENCHA PARA CONTINUARMOS O ATENDIMENTO"
        />
      </Banner>
      <Provider>{children}</Provider>
    </div>
  );
}

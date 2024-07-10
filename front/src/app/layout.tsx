import { Banner, CopyForm, Footer, Informative, Navbar } from "@/components";
import { WrapperForm } from "@/components/WrapperForm/WrapperForm";
import { Provider } from "@/context/Context";
import { ProviderCalc } from "@/context/ContextCalc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equipacare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-[#F2F2F2] ${inter.className}`}>
        <Navbar />
        <Banner
          style={{
            backgroundImage: "url(/image-calculadora.png)",
          }}
        >
          <CopyForm
            h1="FORMULÁRIO"
            p="PREENCHA PARA CONTINUARMOS O ATENDIMENTO"
          />
        </Banner>
        <Informative />
        <WrapperForm>
          <ProviderCalc>
            <Provider>{children}</Provider>
          </ProviderCalc>
        </WrapperForm>
        <Footer />
      </body>
    </html>
  );
}

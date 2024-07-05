import { Banner, CopyForm, Footer, Informative, Navbar } from "@/components";
import { WrapperForm } from "@/components/WrapperForm/WrapperForm";
import { Provider } from "@/context/Context";
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
            h1="CALCULADORA"
            p="O material utilizado em hospitais exige certo conhecimento e experiencia na área. Esta ferramenta irá ajudar a estimar o volume diário de material."
          />
        </Banner>
        <Informative />
        <WrapperForm>
          <Provider>{children}</Provider>
        </WrapperForm>
        <Footer />
      </body>
    </html>
  );
}

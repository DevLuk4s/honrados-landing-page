import type { Metadata } from "next";
import "./globals.css";

// Para usar as fontes Montserrat + Inter do Google Fonts (recomendado),
// descomente o bloco abaixo e aplique as variáveis na tag <html>:
//
// import { Montserrat, Inter } from "next/font/google";
// const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500","600","700","800"] });
// const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600"] });
// className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
//
// Por padrão este projeto usa fontes de sistema (sans-serif) para garantir
// que o build funcione em qualquer ambiente, mesmo sem acesso à internet.

export const metadata: Metadata = {
  title: "Honrados Academia de Esportes | Jiu Jitsu para Todos os Níveis",
  description:
    "Aulas de Jiu Jitsu para adultos e crianças na Honrados Academia de Esportes. Agende sua aula experimental gratuita e descubra a arte suave.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-jj-black text-jj-white">
        {children}
      </body>
    </html>
  );
}

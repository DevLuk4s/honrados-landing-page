import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Modalidades } from "@/components/sections/modalidades";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Galeria } from "@/components/sections/galeria";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Localizacao } from "@/components/sections/localizacao";
import { FormularioAula } from "@/components/sections/formulario-aula";
import { Footer } from "@/components/sections/footer";
import { WhatsappFloat } from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modalidades />
        <Diferenciais />
        <Galeria />
        <Depoimentos />
        <Localizacao />
        <FormularioAula />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import Operadoras from "@/components/sections/Operadoras";
import Hospitais from "@/components/sections/Hospitais";
import Proposta from "@/components/sections/Proposta";
import Planos from "@/components/sections/Planos";
import LinhaDoTempo from "@/components/sections/LinhaDoTempo";
import CallToAction from "@/components/sections/CallToAction";


export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <Operadoras />
        <Hospitais />

        <Planos />
        <Proposta />
        <LinhaDoTempo />
        <CallToAction />
      </main>
      
    </>
  );
}

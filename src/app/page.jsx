import CallToAction from "@/components/sections/CallToAction";
import Hero from "@/components/sections/Hero";
import Hospitais from "@/components/sections/Hospitais";
import LinhaDoTempo from "@/components/sections/LinhaDoTempo";

import Operadoras from "@/components/sections/Operadoras";
import Planos from "@/components/sections/Planos";
import Proposta from "@/components/sections/Proposta";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <Operadoras />
      <Hospitais />
      <Planos />
      <Proposta />
      <LinhaDoTempo />
      <CallToAction />
    </main>
  );
}

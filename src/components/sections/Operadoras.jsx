import Image from "next/image";

function Operadoras() {
  const operadoras = [
    {
      nome: "Hapvida",
      logo: "/logos/hapvida.png",
      alt: "Logo da operadora Hapvida",
    },
    {
      nome: "Unimed",
      logo: "/logos/unimed.png",
      alt: "Logo da operadora Unimed",
    },
    {
      nome: "Amil",
      logo: "/logos/amil.png",
      alt: "Logo da operadora Amil",
    },
    {
      nome: "SulAmérica",
      logo: "/logos/sulamerica.png",
      alt: "Logo da operadora SulAmérica",
    },
    {
      nome: "Alice",
      logo: "/logos/alice.png",
      alt: "Logo da operadora Alice",
    },
    {
      nome: "Bradesco",
      logo: "/logos/bradesco.png",
      alt: "Logo da operadora Bradesco Saúde",
    },
  ];

  return (
    <section
      id="operadoras"
      className="section-width grid grid-cols-12 place-items-center py-30"
    >
      {/* Grid de Logos */}
      <div className="col-span-12 lg:col-span-6 grid grid-cols-3 gap-8 justify-items-center">
        {operadoras.map((operadora) => (
          <div
            key={operadora.nome}
            className="w-[120px] h-[120px] p-2 flex justify-center items-center hover:scale-102"
          >
            <Image
              src={operadora.logo}
              alt={operadora.alt}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="col-span-12 lg:col-span-6 mt-14 lg:mt-0 mx-auto text-center w-[90%] lg:text-left">
        <h2 className="text-4xl font-bold mb-4 leading-[1] tracking-[-0.0625rem] lexend">
          Trabalhamos com as{" "}
          <span className="text-[#208D74] font-bold">melhores operadoras</span>{" "}
          <br className="hidden lg:block" />
          do Brasil
        </h2>
        <p className="text-lg lg:text-base text-black/70 font-light">
          Atuamos com uma ampla rede de operadoras, oferecendo soluções
          personalizadas que unem economia e qualidade. Nossas consultoras
          analisam seu perfil e indicam os planos ideais para você.
        </p>
      </div>
    </section>
  );
}

export default Operadoras;

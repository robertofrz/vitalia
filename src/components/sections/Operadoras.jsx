import Image from "next/image";

function Operadoras() {
  const operadoras = [
    {
      nome: "Hapvida",
      logo: "/logos/hapvida.png",
      alt: "Logo da operadora Hapvida",
    },
    {
      nome: "Alice",
      logo: "/logos/alice.png",
      alt: "Logo da operadora Alice",
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
      nome: "Unimed",
      logo: "/logos/unimed.png",
      alt: "Logo da operadora Unimed",
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
      className="section-width grid grid-cols-12 gap-8 place-items-center py-24"
    >
      {/* Grid de Logos */}
      <div className="col-span-12 lg:col-span-6 grid grid-cols-3 px-2 w-full justify-items-center gap-x-4 lg:gap-x-0 mt-8 lg:mt-0">
        {operadoras.map((operadora) => (
          <div
            key={operadora.nome}
            className="w-[120px] h-[100px] lg:h-[150px] flex justify-center items-center hover:scale-102"
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
      <div className="col-span-12 lg:col-span-6 lg:mt-0 mx-auto text-center w-[90%] lg:text-left">
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

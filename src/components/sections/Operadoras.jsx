import Image from "next/image";

function Operadoras() {
  const operadoras = [
    {
      nome: "Unimed",
      logo: "/logos/unimed.png",
      alt: "Logo da operadora Unimed",
    },
    {
      nome: "Bradesco Saúde",
      logo: "/logos/bradesco.png",
      alt: "Logo da operadora Bradesco Saúde",
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
      nome: "Hapvida",
      logo: "/logos/hapvida.png",
      alt: "Logo da operadora Hapvida",
    },
    {
      nome: "Porto Saúde",
      logo: "/logos/porto.png",
      alt: "Logo da operadora Porto Saúde",
    },
    {
      nome: "Omint",
      logo: "/logos/omint.png",
      alt: "Logo da operadora Omint",
    },
    {
      nome: "Care Plus",
      logo: "/logos/careplus.png",
      alt: "Logo da operadora Care Plus",
    },
    {
      nome: "São Cristóvão Saúde",
      logo: "/logos/saocristovao.png",
      alt: "Logo da operadora São Cristóvão Saúde",
    },
    {
      nome: "Santa Helena Saúde",
      logo: "/logos/santahelena.png",
      alt: "Logo da operadora Santa Helena Saúde",
    },
    {
      nome: "Plena Saúde",
      logo: "/logos/plenasaude.png",
      alt: "Logo da operadora Plena Saúde",
    },
    {
      nome: "Ameplan",
      logo: "/logos/ameplan.png",
      alt: "Logo da operadora Ameplan",
    },
    {
      nome: "Sami",
      logo: "/logos/sami.png",
      alt: "Logo da operadora Sami",
    },
    {
      nome: "Alice",
      logo: "/logos/alice.png",
      alt: "Logo da operadora Alice",
    },
    {
      nome: "Trasmontano",
      logo: "/logos/trasmontano.png",
      alt: "Logo da operadora Trasmontano",
    },
  ];

  return (
    <section
      id="operadoras"
      className="section-width grid grid-cols-12 lg:gap-10 place-items-center py-24"
    >
      {/* Grid de Logos */}
      <div className="col-span-12 lg:col-span-7 grid grid-cols-3 lg:grid-cols-5 px-2 w-full justify-items-center gap-2 mt-8 lg:mt-8">
        {operadoras.map((operadora) => (
          <div
            key={operadora.nome}
            className="flex justify-center items-center rounded-lg shadow-md hover:border hover:border-black/10"
          >
            <Image
              src={operadora.logo}
              alt={operadora.alt}
              width={160}
              height={160}
              className="object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="col-span-12 lg:col-span-5 mt-8 mx-auto text-center w-[90%] lg:text-left">
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

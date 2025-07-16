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
      className="flex flex-col md:flex-row justify-center items-center md:gap-18 w-[90vw] m-auto py-16 poppins mt-14"
    >
      {/* Grid de Logos */}
      <div className="grid grid-cols-3 gap-3 md:ml-20 md:gap-10 w-full md:w-1/3 place-items-center mt-14">
        {operadoras.map((operadora) => (
          <div
            key={operadora.nome}
            className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-white shadow-md border border-neutral-200 p-2 rounded-xl flex justify-center items-center hover:scale-102 hover:bg-neutral-100 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={operadora.logo}
              alt={operadora.alt}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left lexend mt-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight lexend">
          Trabalhamos com as{" "}
          <span className="text-[#208D74] font-semibold">
            melhores operadoras
          </span>{" "}
          <br className="hidden md:block" />
          do Brasil
        </h2>
        <p className="text-xl md:text-xl text-black/80 max-w-[90%]  mx-auto md:mx-0">
          Trabalhamos com uma ampla rede de operadoras, das mais conhecidas às
          mais acessíveis, para oferecer soluções sob medida para cada perfil.
          Nossas consultoras analisam suas necessidades e indicam os planos que
          realmente fazem sentido para você, unindo economia e qualidade no
          cuidado com sua saúde.
        </p>
      </div>
    </section>
  );
}

export default Operadoras;

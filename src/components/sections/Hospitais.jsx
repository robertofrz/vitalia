import Image from "next/image";

function Hospitais() {
  const hospitais = [
    {
      nome: "Hospital Sírio-Libanês",
      url: "https://hospitalsiriolibanes.org.br",
    },
    {
      nome: "Hospital Albert Einstein",
      url: "https://www.einstein.br",
    },
    {
      nome: "Hospital Alemão Oswaldo Cruz",
      url: "https://www.hospitaloswaldocruz.org.br",
    },
    {
      nome: "Hospital São Luiz (Rede D’Or)",
      url: "https://www.rededorsaoluiz.com.br",
    },
    {
      nome: "Hospital Santa Catarina",
      url: "https://redesantacatarina.org.br",
    },
    {
      nome: "Hospital Leforte",
      url: "https://www.leforte.com.br",
    },
    {
      nome: "Hospital Beneficência Portuguesa",
      url: "https://www.bp.org.br",
    },
    {
      nome: "Hospital Nove de Julho",
      url: "https://www.h9j.com.br",
    },
    {
      nome: "Hospital e Maternidade Santa Joana",
      url: "https://santajoana.com.br",
    },
  ];

  return (
    <section
      id="hospitais"
      className="section-width flex flex-col sm:flex-row items-center justify-center gap-20 py-30"
    >
      {/* Texto */}
      <div className="md:w-1/2 lg:w-1/3 text-center lg:text-left order-2 lg:order-1 ">
        <h2 className="text-4xl font-bold mb-4 leading-[1] tracking-[-0.0625rem] w-fit md:w-full mx-auto md:mx-0 lexend">
          Atendimento nos <br />
          <span className="text-[#208D74] font-bold">
            melhores hospitais
          </span>{" "}
          <br className="hidden lg:block" />
          do país
        </h2>
        <p className="text-lg lg:text-base text-black/70 mb-8 max-w-[90%]  font-light mx-auto md:mx-0">
          Os planos oferecidos pela Vitalia dão acesso aos hospitais mais
          reconhecidos do Brasil.
        </p>
        <ul className="list-disc pl-6 text-lg lg:text-base text-black/70 text-left font-light max-w-[90%] md:max-w-full mx-auto md:mx-0">
          {hospitais.map((hospital) => (
            <li
              key={hospital.nome}
              className="hover:text-[#208D74] hover:font-semibold"
            >
              {hospital.nome}
            </li>
          ))}
          <li>Entre outros</li>
        </ul>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2 h-fit order-1 lg:order-2 ">
        <Image
          src="/hospitais.png"
          alt="Fachada dos Hospitais Sirio-Libanês, São Luiz e 9 de Julho."
          width={680}
          height={530}
          className="mx-auto"
        />
      </div>
    </section>
  );
}

export default Hospitais;

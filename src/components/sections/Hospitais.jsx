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
      className="flex flex-col-reverse md:flex-row justify-center items-center w-[90vw] m-auto py-20 poppins"
    >
      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-tight w-fit md:w-full mx-auto md:mx-0 lexend">
          Atendimento nos <br />
          <span className="text-[#208D74] font-semibold">
            melhores hospitais
          </span>{" "}
          <br className="hidden md:block" />
          do país
        </h2>
        <p className="text-xl text-neutral-600 mb-6 max-w-[90%] md:w-[70%] mx-auto md:mx-0">
          Os planos oferecidos pela Vitalia dão acesso aos hospitais mais
          reconhecidos do Brasil.
        </p>
        <ul className="list-disc pl-6 text-lg text-neutral-700 text-left max-w-[90%] md:max-w-full mx-auto md:mx-0">
          {hospitais.map((hospital) => (
            <li
              key={hospital.nome}
              className="hover:text-[#208D74] transition-colors duration-200"
            >
              {hospital.nome}
            </li>
          ))}
          <li>Entre outros</li>
        </ul>
      </div>

      {/* Imagem */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-14">
        <Image
          src="/hospitais.png"
          alt="Fachada dos Hospitais Sirio-Libanês, São Luiz e 9 de Julho."
          width={450}
          height={450}
          className="w-[80%] md:w-[450px] h-auto"
        />
      </div>
    </section>
  );
}

export default Hospitais;

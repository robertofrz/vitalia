import Image from "next/image";

function Hospitais() {
  return (
    <section
      id="hospitais"
      className="section-width flex flex-col lg:flex-row items-center justify-center gap-8 py-24"
    >
      {/* Texto */}
      <div className="w-full lg:w-1/2 text-center lg:text-right order-2 lg:order-1 ">
        <h2 className="text-4xl font-bold mb-4 leading-[1] tracking-[-0.0625rem] w-[90%]  mx-auto lexend">
          Atendimento nos <br />
          <span className="text-[#208D74] font-bold">
            melhores hospitais
          </span>{" "}
          <br className="hidden lg:block" />
          do país
        </h2>
        <p className="text-lg lg:text-base text-black/70 mb-8 w-[90%] font-light mx-auto">
          Os planos de saúde oferecidos pela Vitalia proporcionam acesso a uma
          rede hospitalar de excelência, incluindo algumas das instituições mais
          reconhecidas do Brasil, como o{" "}
          <span className="font-medium">Hospital Sírio-Libanês</span>,{" "}
          <span className="font-medium">Hospital 9 de Julho</span>,{" "}
          <span className="font-medium">Hospital São Luiz</span>, entre outros!
        </p>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2 h-fit order-1 lg:order-2 mt-8">
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

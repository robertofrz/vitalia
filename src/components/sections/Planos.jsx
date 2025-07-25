import Image from "next/image";

function Planos() {
  const planos = [
    {
      titulo: "Pessoa Física",
      texto:
        "Ideal para quem deseja um plano individual, com liberdade de escolha e cobertura adequada ao seu perfil.",
      imagem: "/plano-pessoa-fisica.webp",
      alt: "Imagem de uma senhora ao lado de rosas vermelhas.",
      invertido: false,
    },
    {
      titulo: "Empresarial",
      texto:
        "Soluções completas para empresas que desejam oferecer benefícios de saúde aos seus colaboradores com custo acessível.",
      imagem: "/plano-empresa.webp",
      alt: "Imagem de um grupo de pessoas trabalhando juntas em uma empresa.",
      invertido: true,
    },
    {
      titulo: "MEI",
      texto:
        "Planos de saúde exclusivos para microempreendedores individuais, com preços competitivos e boas coberturas.",
      imagem: "/plano-mei.webp",
      alt: "Imagem de uma mulher trabalhando em um laptop.",
      invertido: false,
    },
    {
      titulo: "Familiar",
      texto:
        "Proteja toda a sua família com um único plano, garantindo cuidado médico de qualidade para todos os membros.",
      imagem: "/plano-familia.webp",
      alt: "Imagem de uma família feliz na praia.",
      invertido: true,
    },
  ];

  return (
    <section id="planos" className="w-full bg-[#208D74]  py-24">
      <div className="section-width grid grid-cols-12">
        <h2 className="col-span-12 text-4xl text-center mt-8 text-white leading-[1] tracking-[-0.0625rem] font-semibold mb-8 md:mb-14 lexend">
          Encontre o <span className="text-white font-bold">Plano Ideal</span>{" "}
          para Você
        </h2>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-14">
          {planos.map(({ titulo, texto, imagem, alt, invertido }, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                invertido ? "md:flex-row-reverse" : ""
              } items-center md:items-stretch bg-white shadow-md rounded-2xl overflow-hidden`}
            >
              <Image
                src={imagem}
                alt={alt}
                width={300}
                height={225}
                className="object-cover w-full md:w-auto"
              />
              <div
                className={`p-8 flex flex-col md:justify-center ${
                  invertido
                    ? "items-center text-center md:items-end md:text-right"
                    : "items-center text-center md:items-start md:text-left"
                }`}
              >
                <h3 className="text-2xl mb-4 font-semibold lexend">{titulo}</h3>
                <p className="text-base mb-8 text-black/70 font-light">
                  {texto}
                </p>
                <a
                  href={`https://wa.me/5521997894248?text=${encodeURIComponent(
                    `Olá! Quero mais informações sobre o plano ${titulo}, por gentileza.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-5 rounded-full tracking-[0.0625rem] bg-[#208D74] text-white font-medium cursor-pointer shadow-md hover:shadow-lg hover:bg-[#1a9f7c] transition-colors duration-300 active:scale-98"
                >
                  Quero saber mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planos;

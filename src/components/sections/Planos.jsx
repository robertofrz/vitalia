import Image from "next/image";

function Planos() {
  const planos = [
    {
      titulo: "Pessoa Física",
      texto:
        "Ideal para quem deseja um plano individual, com liberdade de escolha e cobertura adequada ao seu perfil.",
      imagem: "/plano-pessoa-fisica.png",
      alt: "Imagem de uma senhora ao lado de rosas vermelhas.",
      invertido: false,
    },
    {
      titulo: "Empresarial",
      texto:
        "Soluções completas para empresas que desejam oferecer benefícios de saúde aos seus colaboradores com custo acessível.",
      imagem: "/plano-empresa.png",
      alt: "Imagem de um grupo de pessoas trabalhando juntas em uma empresa.",
      invertido: true,
    },
    {
      titulo: "MEI",
      texto:
        "Planos de saúde exclusivos para microempreendedores individuais, com preços competitivos e boas coberturas.",
      imagem: "/plano-mei.png",
      alt: "Imagem de uma mulher trabalhando em um laptop.",
      invertido: false,
    },
    {
      titulo: "Familiar",
      texto:
        "Proteja toda a sua família com um único plano, garantindo cuidado médico de qualidade para todos os membros.",
      imagem: "/plano-familia.png",
      alt: "Imagem de uma família feliz na praia.",
      invertido: true,
    },
  ];

  return (
    <section
      id="planos"
      className="w-[95vw] max-w-6xl mx-auto px-4 py-20 poppins"
    >
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-8 md:mb-14 mt-12 lexend">
        Encontre o{" "}
        <span className="text-[#208D74] font-semibold">Plano Ideal</span> para
        Você
      </h2>

      <div className="flex flex-col gap-14 w-full md:w-4/5 mx-auto">
        {planos.map(({ titulo, texto, imagem, alt, invertido }, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              invertido ? "md:flex-row-reverse" : ""
            } items-center md:items-stretch bg-white shadow-md border border-neutral-200 rounded-2xl overflow-hidden`}
          >
            <Image
              src={imagem}
              alt={alt}
              width={300}
              height={225}
              className="object-cover w-full md:w-auto"
            />
            <div
              className={`p-8 flex flex-col gap-4 md:justify-center ${
                invertido
                  ? "items-center text-center md:items-end md:text-right"
                  : "items-center text-center md:items-start md:text-left"
              }`}
            >
              <h3 className="text-2xl font-semibold lexend">{titulo}</h3>
              <p className="text-base text-gray-600">{texto}</p>
              <a
                href={`https://wa.me/5511937274647?text=${encodeURIComponent(
                  `Olá! Quero mais informações sobre o plano ${titulo}, por gentileza.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full bg-[#208D74] text-white text-md font-semibold cursor-pointer shadow-md hover:shadow-lg hover:bg-[#1a9f7c] transition-colors duration-300 active:scale-98"
              >
                Quero saber mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Planos;

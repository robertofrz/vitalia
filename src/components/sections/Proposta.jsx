import {
  HelpingHand,
  HeartHandshake,
  Handshake,
  Hospital,
  Users,
  Headset,
} from "lucide-react";

function Proposta() {
  const beneficios = [
    {
      nome: "Consultoria gratuita",
      descricao:
        "Conte com a orientação especializada de nossas consultoras sem nenhum custo. Avaliamos seu perfil, entendemos suas necessidades e indicamos as melhores opções do mercado.",
      icone: "HelpingHand",
    },
    {
      nome: "Atendimento humanizado",
      descricao:
        "Nosso atendimento é feito por pessoas que realmente se importam, oferecendo suporte claro, empático e comprometido com o seu bem-estar.",
      icone: "HeartHandshake",
    },
    {
      nome: "Parcerias com as maiores operadoras",
      descricao:
        "Trabalhamos com as principais operadoras do mercado. Isso nos permite oferecer uma ampla variedade de planos com qualidade e confiança.",
      icone: "Handshake",
    },
    {
      nome: "Atendimento nos melhores hospitais do país",
      descricao:
        "Os planos que oferecemos incluem acesso a hospitais renomados garantindo o melhor cuidado médico para você e sua família.",
      icone: "Hospital",
    },
    {
      nome: "Planos para MEI, empresas e pessoa física",
      descricao:
        "Seja você um microempreendedor, gestor de uma empresa ou buscando um plano individual, temos opções personalizadas para cada perfil e necessidade.",
      icone: "Users",
    },
    {
      nome: "Suporte na contratação e pós-venda",
      descricao:
        "Nossa equipe acompanha todo o processo de contratação e continua ao seu lado após a assinatura, auxiliando em tudo que você precisar.",
      icone: "Headset",
    },
  ];

  const icons = {
    HelpingHand,
    HeartHandshake,
    Handshake,
    Hospital,
    Users,
    Headset,
  };

  return (
    <section
      id="proposta"
      className="w-[95vw] m-auto px-4 md:px-8 py-18 flex flex-col items-center poppins"
    >
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-8 md:mb-14 mt-14 lexend">
        Por que escolher a{" "}
        <span className="text-[#208D74] font-semibold">Vitalia Saúde</span>?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {beneficios.map(({ nome, descricao, icone }) => {
          const Icon = icons[icone];
          return (
            <div
              key={nome}
              className="flex gap-4 bg-white shadow-md border border-neutral-200 rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <Icon className="w-10 h-10 text-[#208D74] shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2 lexend">{nome}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {descricao}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Proposta;

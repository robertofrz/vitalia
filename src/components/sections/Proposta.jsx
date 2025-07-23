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
        "Receba orientação especializada sem custo. Avaliamos seu perfil e indicamos as melhores opções.",
      icone: "HelpingHand",
    },
    {
      nome: "Atendimento humanizado",
      descricao:
        "Oferecemos suporte empático, claro e focado no seu bem-estar.",
      icone: "HeartHandshake",
    },
    {
      nome: "Parcerias com as maiores operadoras",
      descricao:
        "Trabalhamos com as principais operadoras para garantir planos confiáveis e variados.",
      icone: "Handshake",
    },
    {
      nome: "Atendimento nos melhores hospitais do país",
      descricao:
        "Nossos planos oferecem acesso a hospitais de referência em todo o Brasil.",
      icone: "Hospital",
    },
    {
      nome: "Planos para MEI, empresas e pessoa física",
      descricao:
        "Temos planos sob medida para microempreendedores, empresas e indivíduos.",
      icone: "Users",
    },
    {
      nome: "Suporte na contratação e pós-venda",
      descricao:
        "Acompanhamos você na contratação e oferecemos suporte contínuo.",
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
    <section id="proposta" className="section-width py-30">
      <h2 className="text-4xl text-center tracking-[-0.0625rem] leading-[1] font-bold mb-8 md:mb-14lexend">
        Por que escolher a{" "}
        <span className="text-[#208D74] font-bold">Vitalia Saúde</span>?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {beneficios.map(({ nome, descricao, icone }) => {
          const Icon = icons[icone];
          return (
            <div
              key={nome}
              className="flex gap-4 bg-white shadow-md border border-neutral-200 rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <Icon className="w-8 h-8 mt-1 text-[#208D74] shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2 lexend">{nome}</h3>
                <p className="text-base text-black/70 leading-relaxed font-light">
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

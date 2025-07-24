function LinhaDoTempo() {
  const etapas = [
    {
      numero: 1,
      titulo: "Entre em contato",
      descricao:
        "Fale com a gente por WhatsApp, telefone ou formulário. É rápido e sem compromisso!",
    },
    {
      numero: 2,
      titulo: "Entendemos seu perfil",
      descricao:
        "Nosso time analisa suas necessidades para indicar as melhores opções de plano.",
    },
    {
      numero: 3,
      titulo: "Apresentamos as opções",
      descricao:
        "Você recebe comparativos com planos ideais para seu perfil e orçamento.",
    },
    {
      numero: 4,
      titulo: "Escolha e contratação",
      descricao:
        "Juntos finalizamos a escolha e cuidamos de toda a parte burocrática.",
    },
  ];

  return (
    <section className="section-width py-24">
      <div className="grid grid-cols-12">
        <h2 className="col-span-12 text-4xl mb-8 font-bold text-center leading-[1] tracking-[-0.0625rem] text-black lexend">
          Veja como é <span className="text-[#208D74] font-bold">fácil</span>{" "}
          contratar
        </h2>

        <div className="col-span-12 sm:col-span-6 sm:col-start-4 flex flex-col items-center justify-center gap-8">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="border border-neutral-200 w-full flex flex-col md:flex-row justify-start items-center text-center md:text-left p-6 gap-4 sm:gap-6 bg-white rounded-2xl shadow-md transition-all hover:shadow-lg"
            >
              <p className="text-[#208D74] text-6xl font-semibold lexend">
                {etapa.numero}
              </p>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <h3 className="text-xl font-semibold lexend">{etapa.titulo}</h3>
                <p className="text-base text-black/70 font-light">
                  {etapa.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinhaDoTempo;

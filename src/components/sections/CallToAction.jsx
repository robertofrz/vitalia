import EstadosProvider from "../ui/EstadosProvider";

function CallToAction() {
  return (
    <section
      id="contato"
      className="w-full bg-gradient-to-b from-white to-[#208D74] py-24"
    >
      <div className="section-width flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center mb-4 font-semibold leading-[1] tracking-[-0.0625rem] lexend">
          Pronto para{" "}
          <span className="text-[#208D74] font-bold">cuidar da sua saúde</span>{" "}
          <br className="hidden md:block" />
          com quem entende do assunto?
        </h2>

        <p className="text-black/70 sm:w-1/2 mb-8 text-center">
          Nossa equipe está pronta para te ajudar a encontrar o plano ideal com
          segurança, economia e zero burocracia!
        </p>

        <a
          href={`https://wa.me/5521997894248?text=${encodeURIComponent(
            `Olá! Gostaria de mais informações sobre os planos de saúde, por gentileza.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#208D74] tracking-[0.0625rem] text-white text-lg px-6 py-4 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-[#26b193] transition"
        >
          Atendimento pelo WhatsApp
        </a>

        <div className="flex items-center justify-center gap-4 w-full my-8">
          <hr className="w-32 md:w-48 border-t border-neutral-500" />
          <span className="text-neutral-600 font-medium text-lg">OU</span>
          <hr className="w-32 md:w-48 border-t border-neutral-500" />
        </div>

        <h3 className="text-lg text-black/90 text-center font-medium leading-relaxed mb-4">
          Deixe seus dados e nossa equipe especializada{" "}
          <br className="hidden md:block" />
          vai te ajudar a encontrar o melhor plano.
        </h3>

        <EstadosProvider />
      </div>
    </section>
  );
}

export default CallToAction;

import EstadosProvider from "../ui/EstadosProvider";

function CallToAction() {
  return (
    <section
      id="contato"
      className="section-width py-30 flex flex-col justify-center items-center gap-6"
    >
      <h2 className="text-4xl text-center font-semibold leading-tight lexend">
        Pronto para{" "}
        <span className="text-[#208D74] font-semibold">
          cuidar da sua saúde
        </span>{" "}
        <br className="hidden md:block" />
        com quem entende do assunto?
      </h2>

      <p className="text-black/60 text-lg mt-4 text-center">
        Nossa equipe está pronta para te ajudar a encontrar o plano ideal <br />{" "}
        com segurança, economia e zero burocracia!
      </p>

      <a
        href={`https://wa.me/5511937274647?text=${encodeURIComponent(
          `Olá! Gostaria de mais informações sobre os planos de saúde, por gentileza.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#208D74] text-white text-xl px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-[#26b193] transition"
      >
        Atendimento pelo WhatsApp
      </a>

      <div className="flex items-center justify-center gap-4 w-full my-6">
        <hr className="w-32 md:w-48 border-t border-neutral-300" />
        <span className="text-neutral-400 font-medium text-lg">OU</span>
        <hr className="w-32 md:w-48 border-t border-neutral-300" />
      </div>

      <h3 className="text-lg text-black/60 text-center leading-relaxed">
        Deixe seus dados e nossa equipe especializada{" "}
        <br className="hidden md:block" />
        vai te ajudar a encontrar o melhor plano.
      </h3>

      <EstadosProvider />
    </section>
  );
}

export default CallToAction;

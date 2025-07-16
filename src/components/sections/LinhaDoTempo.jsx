import { MessageCircle, UserCheck, LayoutGrid, FileCheck } from "lucide-react";

function LinhaDoTempo() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen poppins w-full m-auto mt-30 bg-[#208D74] py-20">
      <h2 className="text-4xl md:text-5xl mb-14 text-center text-white lexend">
        Veja como é <span className="font-semibold underline">fácil</span>{" "}
        contratar
      </h2>

      <div className="flex flex-col items-center justify-center w-[95vw] max-w-3xl gap-6 px-4">
        {/* Etapa 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 gap-4 w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <MessageCircle className="w-14 h-14 text-[#208D74]" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold lexend">Entre em contato</h3>
            <p className="text-lg text-neutral-600">
              Fale com a gente por WhatsApp, telefone ou formulário. É rápido e
              sem compromisso!
            </p>
          </div>
        </div>

        {/* Etapa 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 gap-4 w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <UserCheck className="w-14 h-14 text-[#208D74]" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold lexend">
              Entendemos seu perfil
            </h3>
            <p className="text-lg text-neutral-600">
              Nosso time analisa suas necessidades para indicar as melhores
              opções de plano.
            </p>
          </div>
        </div>

        {/* Etapa 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 gap-4 w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <LayoutGrid className="w-14 h-14 text-[#208D74]" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold lexend">
              Apresentamos as opções
            </h3>
            <p className="text-lg text-neutral-600">
              Você recebe comparativos com planos ideais para seu perfil e
              orçamento.
            </p>
          </div>
        </div>

        {/* Etapa 4 */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 gap-4 w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <FileCheck className="w-14 h-14 text-[#208D74]" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold lexend">
              Escolha e contratação
            </h3>
            <p className="text-lg text-neutral-600">
              Juntos finalizamos a escolha e cuidamos de toda a parte
              burocrática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinhaDoTempo;

import { MessageCircle, UserCheck, LayoutGrid, FileCheck } from "lucide-react";

function LinhaDoTempo() {
  return (
    <section className="w-full bg-[#208D74] py-30">
      <div className="section-width grid grid-cols-12">
        <h2 className="col-span-12 text-4xl mb-14 text-center text-white lexend">
          Veja como é <span className="font-semibold underline">fácil</span>{" "}
          contratar
        </h2>

        <div className="col-span-12 sm:col-span-8 sm:col-start-3 flex flex-col items-center justify-center gap-6">
          {/* Etapa 1 */}
          <div className="w-full flex flex-col md:flex-row justify-start items-center text-center md:text-left p-8 gap-4  bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <MessageCircle className="w-14 h-14 text-[#208D74]" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold lexend">Entre em contato</h3>
              <p className="text-base text-black/70 font-light">
                Fale com a gente por WhatsApp, telefone ou formulário. É rápido
                e sem compromisso!
              </p>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="w-full flex flex-col md:flex-row justify-start items-center text-center md:text-left p-8 gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <UserCheck className="w-14 h-14 text-[#208D74]" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold lexend">
                Entendemos seu perfil
              </h3>
              <p className="text-base text-black/70 font-light">
                Nosso time analisa suas necessidades para indicar as melhores
                opções de plano.
              </p>
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="w-full flex flex-col md:flex-row justify-start items-center text-center md:text-left p-8 gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <LayoutGrid className="w-14 h-14 text-[#208D74]" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold lexend">
                Apresentamos as opções
              </h3>
              <p className="text-base text-black/70 font-light">
                Você recebe comparativos com planos ideais para seu perfil e
                orçamento.
              </p>
            </div>
          </div>

          {/* Etapa 4 */}
          <div className="w-full flex flex-col md:flex-row justify-start items-center text-center md:text-left p-8 gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FileCheck className="w-14 h-14 text-[#208D74]" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold lexend">
                Escolha e contratação
              </h3>
              <p className="text-base text-black/70 font-light">
                Juntos finalizamos a escolha e cuidamos de toda a parte
                burocrática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinhaDoTempo;

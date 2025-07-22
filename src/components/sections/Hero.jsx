"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-width grid grid-cols-12 items-center gap-4 py-30">
      {/* Texto */}
      <div
        className={`mt-4 col-span-12 lg:col-span-7 flex flex-col gap-2 items-center lg:items-start text-center lg:text-left transition-opacity duration-700 ease-out ${
          isVisible ? "animate-fadeInSlideUp" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 lexend">
          Transforme a Sua Saúde com um
          <span className="text-[#208D74] font-semibold">
            {" "}
            Plano Certo
          </span>{" "}
          para você
        </h1>

        <p className="text-lg lg:text-base w-[80%] mb-4 font-light text-black/70">
          Compare planos, tire dúvidas e conte com atendimento humano de
          verdade.
        </p>

        <a
          href={`https://wa.me/5511937274647?text=${encodeURIComponent(
            `Olá! Quero fazer uma cotação gratuita para um plano de saúde. Por favor, me envie as opções disponíveis.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-4 px-6 rounded-full bg-[#208D74] text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-lg hover:bg-[#1e7e67] transition-all duration-300 active:scale-95"
        >
          Solicitar Cotação Gratuita
        </a>
      </div>

      {/* Imagem */}
      <div
        className={`col-span-12 lg:col-span-5 mx-auto transition-opacity duration-700 ease-out ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Image
          src="/familia.png"
          alt="Imagem de uma família feliz com a mãe, um pai e dois filhos."
          width={550}
          height={400}
          priority
          className="w-full  object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center w-[90vw] sm:w-[80%] max-w-7xl mx-auto px-4 py-10 md:py-20 gap-10 sm:gap-10 lg:gap-0 poppins mt-28 sm:mt-22 lg:mt-18">
      {/* Texto */}
      <div
        className={`text-center flex flex-col lg:items-start items-center lg:text-left transition-opacity duration-700 ease-out ${
          isVisible ? "animate-fadeInSlideUp" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight lexend">
          Transforme a Sua Saúde com um
          <span className="text-[#208D74] font-semibold">
            {" "}
            Plano Certo
          </span>{" "}
          para você
        </h1>

        <p className="text-base sm:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 mb-10 font-light text-black/70">
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
        className={`flex justify-center transition-opacity duration-700 ease-out ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Image
          src="/familia.png"
          alt="Imagem de uma família feliz com a mãe, um pai e dois filhos."
          width={500}
          height={350}
          priority
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Quando o componente é montado, define isVisible como true
    // Isso acionará as classes de animação
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center h-screen w-[88vw] m-auto px-4 mt-10 sm:mt-28 md:mt-8 gap-6 md:gap-0 poppins">
      {/* Adiciona classes dinamicamente com base em isVisible */}
      <div
        className={`w-full md:w-1/2 text-center md:text-left ${
          isVisible ? "animate-fadeInSlideUp" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight lexend">
          Transforme a <br />
          <span className="text-[#208D74] font-semibold">
            Sua Saúde{" "}
          </span> com <br /> um
          <span className="text-[#208D74] font-semibold"> Plano Certo</span>
          <br /> para você
        </h1>
        <p className="text-lg max-w-[90%] md:max-w-[70%] mx-auto md:mx-0 mb-10 text-black/70">
          Compare planos, tire dúvidas e conte com atendimento humano de
          verdade.
        </p>
        <a
          href={`https://wa.me/5511937274647?text=${encodeURIComponent(
            `Olá! Quero fazer uma cotação gratuita para um plano de saúde. Por favor, me envie as opções disponíveis.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-6 md:py-5 md:px-8 rounded-full bg-[#208D74] text-white text-base md:text-xl font-semibold cursor-pointer shadow-md hover:shadow-lg hover:bg-[#1e7e67] transition-colors duration-300 active:scale-98"
        >
          Solicitar Cotação Gratuita
        </a>
      </div>

      <div
        className={` w-full md:w-fit flex justify-center ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Image
          src="/familia.png"
          alt="Imagem de uma família feliz com a mãe, um pai e dois filhos."
          width={600}
          height={450}
          className="w-full h-auto max-w-[400px] md:max-w-[500px] object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;

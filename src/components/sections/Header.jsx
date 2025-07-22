"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 lexend">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/logo.png"
            alt="Logo da Vitalia Saúde"
            width={150}
            height={80}
          />
        </a>

        {/* Links - Desktop */}
        <nav className="hidden lg:flex gap-8 items-center">
          <a
            href="#operadoras"
            className=" text-black/60 hover:text-[#208D74] transition"
          >
            Operadoras
          </a>
          <a
            href="#hospitais"
            className=" text-black/60  hover:text-[#208D74]  transition"
          >
            Hospitais
          </a>

          <a
            href="#planos"
            className=" text-black/60  hover:text-[#208D74]  transition"
          >
            Planos
          </a>
          <a
            href="#proposta"
            className=" text-black/60  hover:text-[#208D74]  transition"
          >
            Nossa Proposta
          </a>
          <a
            href={`https://wa.me/5511937274647?text=${encodeURIComponent(
              `Olá! Gostaria de mais informações sobre os planos de saúde, por gentileza.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#208D74] px-4 py-2 rounded-full   shadow hover:shadow-md hover:bg-[#1a9f7c] transition-colors duration-300 active:scale-98"
          >
            Contato
          </a>
        </nav>

        {/* Botão Hamburguer - Mobile */}
        <button
          className="lg:hidden text-black/60"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            <a
              href="#operadoras"
              className=" text-black/60 py-2  hover:text-[#208D74]  transition"
              onClick={() => setMenuAberto(false)}
            >
              Operadoras
            </a>
            <a
              href="#hospitais"
              className=" text-black/60 py-2  hover:text-[#208D74]  transition"
              onClick={() => setMenuAberto(false)}
            >
              Hospitais
            </a>
            <a
              href="#planos"
              className=" text-black/60 py-2  hover:text-[#208D74]  transition"
              onClick={() => setMenuAberto(false)}
            >
              Planos
            </a>
            <a
              href="#proposta"
              className="  text-black/60 py-2  hover:text-[#208D74]  transition"
              onClick={() => setMenuAberto(false)}
            >
              Nossa Proposta
            </a>

            <a
              href={`https://wa.me/5511937274647?text=${encodeURIComponent(
                `Olá! Gostaria de mais informações sobre os planos de saúde, por gentileza.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black/60 py-2  hover:text-[#208D74]  transition"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

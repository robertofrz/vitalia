"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchCidades } from "@/lib/api";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingSelect from "@/components/ui/FloatingSelect";

export default function Formulario({ estados }) {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidades, setCidades] = useState([]);
  const [consentimento, setConsentimento] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoPlano: "",
    estado: "",
    cidade: "",
  });

  useEffect(() => {
    if (!estadoSelecionado) {
      setCidades([]);
      setFormData((prev) => ({ ...prev, cidade: "" }));
      return;
    }

    fetchCidades(estadoSelecionado).then(setCidades);
  }, [estadoSelecionado]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "estado") {
      setEstadoSelecionado(value);
    }
  }

  return (
    <form
      action="https://formsubmit.co/vitalia.segurosaude@gmail.com"
      method="POST"
      className="w-full max-w-md mx-auto p-8 bg-white border border-black/50 shadow-xl rounded-2xl flex flex-col gap-6"
    >
      <FloatingInput
        label="Nome completo"
        name="nome"
        type="text"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <FloatingInput
        label="E-mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FloatingInput
        label="Telefone"
        name="telefone"
        type="tel"
        value={formData.telefone}
        onChange={handleChange}
        required
      />

      <FloatingSelect
        label="Tipo de plano"
        name="tipoPlano"
        value={formData.tipoPlano}
        onChange={handleChange}
        required
        options={[
          { value: "", label: "Selecione o tipo de plano" },
          { value: "Pessoa Física", label: "Pessoa Física" },
          { value: "MEI", label: "MEI" },
          { value: "Empresarial", label: "Empresarial" },
          { value: "Familiar", label: "Familiar" },
        ]}
      />

      <FloatingSelect
        label="Estado"
        name="estado"
        value={formData.estado}
        onChange={handleChange}
        required
        options={[
          { value: "", label: "Selecione seu estado" },
          ...estados.map((estado) => ({
            value: estado.sigla,
            label: estado.nome,
          })),
        ]}
      />

      <FloatingSelect
        label="Cidade"
        name="cidade"
        value={formData.cidade}
        onChange={handleChange}
        required
        disabled={!estadoSelecionado}
        options={[
          {
            value: "",
            label: estadoSelecionado
              ? "Selecione sua cidade"
              : "Selecione um estado primeiro",
          },
          ...cidades.map((cidade) => ({
            value: cidade,
            label: cidade,
          })),
        ]}
      />

      {/* Anti-spam / config */}
      <input type="hidden" name="_subject" value="Nova lead!" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input
        type="hidden"
        name="_next"
        value="https://vitaliasaude.vercel.app/formulario-enviado"
      />

      <input type="hidden" name="_captcha" value="false" />

      {/* Checkbox LGPD */}
      <div className="flex items-start gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          id="consentimento"
          name="consentimento"
          className="mt-1"
          checked={consentimento}
          onChange={(e) => setConsentimento(e.target.checked)}
          required
        />
        <label htmlFor="consentimento">
          Concordo com o uso dos meus dados para que a Vitalia Saúde entre em
          contato comigo. Li e aceito a{" "}
          <Link href="/privacidade" className="text-[#208D74] underline">
            Política de Privacidade
          </Link>
          .
        </label>
      </div>

      {/* Botão com controle de consentimento */}
      <button
        type="submit"
        disabled={!consentimento}
        className={`text-white text-lg py-3 rounded-md font-semibold shadow transition ${
          consentimento
            ? "bg-[#208D74] hover:bg-[#26b193] cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Enviar
      </button>
    </form>
  );
}

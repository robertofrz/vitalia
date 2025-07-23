import Link from "next/link";

function FormularioEnviado() {
  return (
    <main className="section-width h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-4 leading-[1]  tracking-[-0.0625rem] lexend">
        Formulário enviado com sucesso!
      </h1>
      <p className="text-lg lg:text-base text-center text-black/70 mb-8 ">
        Um de nossos consultores entrará em contato com você em breve. <br />
        Agradecemos por escolher a Vitalia Saúde.
      </p>
      <Link
        href="/"
        className="py-4 px-6 rounded-full tracking-[0.0625rem] bg-[#208D74] text-white font-medium cursor-pointer shadow-md hover:shadow-lg hover:bg-[#1a9f7c] transition-colors duration-300 active:scale-98"
      >
        Voltar a Homepage
      </Link>
    </main>
  );
}

export default FormularioEnviado;

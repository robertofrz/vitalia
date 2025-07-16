import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title:
    "Vitalia Saúde | Encontre o Plano de Saúde Ideal para Você, Sua Família ou Empresa",
  description:
    "Contrate o plano de saúde ideal com ajuda da Vitalia Saúde. Consultoria gratuita, operadoras confiáveis, planos para todos os perfis e atendimento humanizado do início ao fim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

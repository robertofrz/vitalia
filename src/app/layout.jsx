import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Planos de Saúde com Consultoria Gratuita | Vitalia Saúde",
  description:
    "Compare e contrate planos de saúde individuais, familiares e empresariais com ótimo custo-benefício. A Vitalia Saúde oferece consultoria gratuita, operadoras confiáveis e atendimento humanizado do início ao fim.",
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

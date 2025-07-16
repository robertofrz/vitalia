import Formulario from "./Formulario";
import { fetchEstados } from "@/lib/api";

export default async function EstadosProvider() {
  const estados = await fetchEstados();

  return <Formulario estados={estados} />;
}

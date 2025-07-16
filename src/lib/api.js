export async function fetchEstados() {
  const res = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
  const data = await res.json();
  return data.sort((a, b) => a.nome.localeCompare(b.nome));
}

export async function fetchCidades(estadoSigla) {
  const res = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSigla}/municipios`
  );
  const data = await res.json();
  return data.map((cidade) => cidade.nome);
}

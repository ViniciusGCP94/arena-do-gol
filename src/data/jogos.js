const jogosMock = [
  {
    id: 1,
    status: "AO VIVO",
    rodada: "Fase de Grupos • Rodada 1",
    grupo: "Grupo A",
    data: "2026-06-11",
    horario: "18:00",
    local: "Estádio Azteca, Cidade do México",
    timeA: { nome: "México", slug: "MEX", gols: 2 },
    timeB: { nome: "Estados Unidos", slug: "USA", gols: 1 },
    promocao: "Double Chopp Heineken durante todo o jogo!"
  },
  {
    id: 2,
    status: "AGENDADO",
    rodada: "Fase de Grupos • Rodada 1",
    grupo: "Grupo D",
    data: "2026-06-12",
    horario: "16:00",
    local: "SoFi Stadium, Los Angeles",
    timeA: { nome: "Brasil", slug: "BRA", gols: null },
    timeB: { nome: "França", slug: "FRA", gols: null },
    promocao: "Camisa do Brasil = 15% de desconto no combo Hexa."
  }
];

export { jogosMock };
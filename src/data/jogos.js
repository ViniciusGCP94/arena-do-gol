// src/data/jogos.js
export const jogosMock = [
  {
    id: "1",
    rodada: "FASE DE GRUPOS • RODADA 1",
    status: "AO VIVO",
    timeA: { nome: "México", gols: 2, sigla: "MX" },
    timeB: { nome: "Estados Unidos", gols: 1, sigla: "US" },
    data: "2026-06-11",
    horario: "18:00",
    local: "Estádio Azteca, Cidade do México",
    promocao: "Double Chopp Heineken durante todo o jogo!",
    categoria: "fase-de-grupos",
  },
  {
    id: "2",
    rodada: "FASE DE GRUPOS • RODADA 1",
    status: "AGENDADO",
    timeA: { nome: "Brasil", gols: 0, sigla: "BR" },
    timeB: { nome: "França", gols: 0, sigla: "FR" },
    data: "2026-06-12",
    horario: "16:00",
    local: "SoFi Stadium, Los Angeles",
    promocao: "Camisa do Brasil = 15% de desconto no combo Hexa.",
    categoria: "fase-de-grupos",
  },
];
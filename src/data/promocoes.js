
const promocoesMock = [
  {
    id: 1,
    titulo: "Double Chopp Heineken",
    descricao: "Peça um Chopp Heineken de 500ml e ganhe outro! Válido apenas durante o tempo regulamentar da partida.",
    jogoId: 1, // Vinculado ao jogo: México vs EUA
    regras: "Válido apenas para consumo no local. Não cumulativo com outras promoções."
  },
  {
    id: 2,
    titulo: "Desconto do Manto: Combo Hexa",
    descricao: "Venha torcer vestindo a camisa da Seleção Brasileira e ganhe 15% de desconto no Combo Hexa (Balde com 5 Heineken + Coxinha de Frango).",
    jogoId: 2, // Vinculado ao jogo: Brasil vs França
    regras: "Desconto aplicado por mesa se pelo menos uma pessoa estiver com a camisa oficial ou retrô do Brasil."
  },
  {
    id: 3,
    titulo: "Rodada Dupla de Caipirinha",
    descricao: "A cada gol do Brasil, uma rodada dupla de Caipirinha clássica por conta da casa para todos os clientes ativos!",
    jogoId: 2, // Vinculado ao jogo: Brasil vs França
    regras: "Limitado a no máximo 3 rodadas por partida."
  }
];

export { promocoesMock };
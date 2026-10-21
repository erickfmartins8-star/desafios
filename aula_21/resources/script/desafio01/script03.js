// 1. Array com pelo menos 5 jogos
let jogos = [
  "The Legend of Zelda",
  "Minecraft",
  "Super Mario Bros",
  "God of War",
  "GTA V"
];

// Jogo que queremos verificar
let jogoProcurado = "Minecraft";

// 2. Verifica se o array contém o jogo e exibe uma mensagem
if (jogos.includes(jogoProcurado)) {
  console.log(`O jogo "${jogoProcurado}" está na sua biblioteca!`);
} else {
  console.log(`O jogo "${jogoProcurado}" não foi encontrado na sua biblioteca.`);
}
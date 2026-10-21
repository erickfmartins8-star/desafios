// 1. Array com 6 nomes fora de ordem alfabética
let nomes = [
  "Mariana",
  "Bruno",
  "Amanda",
  "Gabriel",
  "Carlos",
  "Fernanda"
];

// Exibe a lista na ordem original antes de ordenar
console.log("=== Lista Original ===");
console.log(nomes);

// 2. Ordena os nomes em ordem alfabética
// Obs: É recomendável usar [...nomes] para criar uma cópia e preservar a lista original
let nomesOrdenados = [...nomes].sort();

// 3. Exibe a lista ordenada
console.log("\n=== Lista Ordenada (Ordem Alfabética) ===");
console.log(nomesOrdenados);


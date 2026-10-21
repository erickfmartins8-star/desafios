let produtos = [
  "Arroz",
  "Feijão",
  "Leite",
  "Pão",
  "Café",
];

// Percorra o array e mostre o número e o produto.
produtos.forEach((produto, indice) => {
  console.log(`${indice + 1} - ${produto}`);
});
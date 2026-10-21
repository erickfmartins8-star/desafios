// 1. Array com 5 títulos de livros
let livros = [
  "O Cortiço",
  "Memórias Póstumas de Brás Cubas",
  "Dom Casmurro",
  "Grande Sertão: Veredas",
  "A Hora da Estrela"
];

let livroProcurado = "Dom Casmurro";

// 2. Localiza a posição do livro no array
let indice = livros.indexOf(livroProcurado);

// 3 e 4. Verifica o resultado e exibe a mensagem correspondente
if (indice === -1) {
  console.log(`O livro "${livroProcurado}" não foi encontrado na lista.`);
} else {
  console.log(`O livro "${livroProcurado}" foi encontrado no índice ${indice} (posição ${indice + 1} da lista).`);
}
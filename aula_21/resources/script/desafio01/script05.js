// 1. Array inicial com 5 tarefas
let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de Matemática",
  "Ler capítulo de História",
  "Revisar redação",
  "Organizar a mesa de estudos"
];

console.log("=== Lista Inicial de Tarefas ===");
console.log(tarefas);

// 2. Remove 1 tarefa usando splice()
// Sintaxe: splice(índice_inicial, quantidade_a_remover)
// Aqui removemos a tarefa no índice 1 ("Fazer exercícios de Matemática")
tarefas.splice(1, 1);

// 3. Substitui uma tarefa por outra usando splice()
// Sintaxe: splice(índice, quantidade_a_remover, novo_item)
// Aqui substituímos o índice 2 ("Revisar redação") por "Praticar Inglês"
tarefas.splice(2, 1, "Praticar Inglês");

// 4. Exibe a lista final após as alterações
console.log("\n=== Lista Atualizada de Tarefas ===");
console.log(tarefas);
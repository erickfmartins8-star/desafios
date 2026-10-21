// 1. Array inicial com as notas dos alunos (com uma nota incorreta: -5)
let notas = [8.5, 6.0, 10.0, -5.0, 7.5, 9.0, 4.5];

console.log("=== 1. NOTAS ORIGINAIS ===");
console.log(notas);

// 2. WHILE: Trata e remove notas inválidas (menores que 0 ou maiores que 10)
let cont = 0;
while (cont < notas.length) {
  if (notas[cont] < 0 || notas[cont] > 10) {
    console.log(`\n[Aviso] Nota inválida (${notas[cont]}) encontrada no índice ${cont}. Removendo...`);
    
    // 6. SPLICE: Remove a nota incorreta
    notas.splice(cont, 1);
    
    // Não incrementa o contador nesta volta pois os elementos mudaram de posição
    continue; 
  }
  cont++;
}

console.log("\n=== 2. VERIFICAÇÕES ===");

// 4. INCLUDES: Verifica se a nota 10 aparece na turma
if (notas.includes(10.0)) {
  console.log("✓ Pelo menos um aluno tirou nota 10!");
} else {
  console.log("x Ninguém tirou nota 10 nesta turma.");
}

// 5. INDEXOF: Encontra a posição de uma nota específica (ex: 7.5)
let notaBusca = 7.5;
let posicao = notas.indexOf(notaBusca);

if (posicao !== -1) {
  console.log(`✓ A nota ${notaBusca} foi encontrada no índice ${posicao}.`);
} else {
  console.log(`x A nota ${notaBusca} não foi encontrada.`);
}

// 3. FOREACH: Exibe todas as notas válidas
console.log("\n=== 3. LISTA DE NOTAS VÁLIDAS ===");
notas.forEach((nota, index) => {
  console.log(`Aluno ${index + 1}: ${nota}`);
});

// 7. SORT: Ordena as notas em ordem crescente
// Para números em JS, é necessário passar a função de comparação (a - b)
notas.sort((a, b) => a - b);

// DESAFIO EXTRA: Exibição do resultado final
console.log("\n=== 4. RELATÓRIO FINAL (ORDEM CRESCENTE) ===");
console.log(notas);
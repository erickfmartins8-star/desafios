let senha = "1234";
let senhaDigitada = prompt("Digite sua senha");
let tentativas = 3
while (tentativas > 0) {
    tentativas = tentativas - 1;
    if (senhaDigitada.toLowerCase().trim() === senha.toLowerCase().trim()) {
        alert("acesso permitido");
        break;
    }
    else {
        if (tentativas === 0) {
            alert("Número de tentativas esgotado, acesso negado");
            break;
        }
    
    alert("Senha incorreta, tentativas restantes: ".concat(tentativas));
    senhaDigitada = prompt("digite novamente")
 }
}
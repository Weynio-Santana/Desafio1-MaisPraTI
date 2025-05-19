const prompt = require('prompt-sync')();
/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/


let resposta = null;
let soma = 0;
let contador = 0;

while (resposta !== 0) {
  resposta = Number(
    prompt('Informe as médias (Para calcular a média final digite 0): ')
  );
  soma += resposta;
  contador++;
}

const mediaFinal = soma / (contador - 1);

console.log(`A média final é: ${mediaFinal}`);

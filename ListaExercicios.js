const prompt = require('prompt-sync')()

//  1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const numero = Number(prompt(" Digite um numero e descubra se ele é par ou ímpar: "))

if (numero %2 ===0){
    console.log("O Numero é par")
}else{
    console.log(" O Numero é ímpar")
}

/*2 Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/ 

const idade = Number(prompt("\n Digite a idade: "));

if (idade < 13) {
    console.log("Criança");
} else if (idade < 19) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso ");
}

/*3 Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/


const nota = Number(prompt('Digite uma nota de 0 a 10: '))

if (nota < 0 || nota > 10) {
    console.log('Digite uma nota valida!');
} else if (nota < 3) {
    console.log('Reprovado');
} else if (nota  < 6) {
    console.log('Recuperacao');
} else {
    console.log('Aprovado');
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

function menuInterativo(){
    console.log('\n****** MENU ******\n');
    console.log('\nDigite 1 para Futebol, 2 para Basquete ou 3 para Tenis .\n');
    const opcao = Number(prompt('Digite a opção desejada: '))
    switch(opcao) {
        case 1:
            console.log('Você escolheu Futebol.');
            break;
        case 2:
            console.log('Você escolheu Basquete.');
            break;
        case 3:
            console.log('Você escolheu Tenis.');
            break;
        default:
            console.log('Por favor, digite uma das 3 opções disponíveis.')
    }
}

menuInterativo();


/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
  
    if (imc < 18.5) {
      console.log("Baixo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }
  }
  
  calcularIMC(60, 1.73);


  /*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

function Triangulo(){
    const ladoA = Number(prompt('Digite a medida do lado A: '))
    const ladoB = Number(prompt('Digite a medida do lado B: '))
    const ladoC = Number(prompt('Digite a medida do lado C: '))

    if ( ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return 'Triângulo equilátero. (todos os lados iguais)';
        } else if(ladoA === ladoB|| ladoA === ladoC || ladoB ===ladoC) {
            return 'Triângulo escaleno. (dois lados iguais)';
        } else{
            return 'Triângulo isósceles. (todos os lados diferentes)';
        }

    }else{
        return 'As medidas informadas não formam um triângulo.';
    }
}
console.log(Triangulo());


/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const macasCompradas = Number(prompt('Digite o numero de maçãs: '))

if (macasCompradas >= 12) {
    const preco = 0.25 * macasCompradas
    console.log(`Desconto aplicado! ${macasCompradas} maças custaram um total de R$${preco.toFixed(2)} reais!`);
} else {
    const preco = 0.3 * macasCompradas
    console.log(`Preco normal, ${macasCompradas} maçã custaram um total de R$${preco.toFixed(2)} reais!`);
}

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/


const valor1 = Number(prompt('Digite o primeiro valor: '));
const valor2 = Number(prompt('Digite o segundo valor: '));

if (valor1 < valor2) {
  console.log(`Valores em ordem crescente ${valor1}, ${valor2}`);
} else {
  console.log(`Valores em ordem crescente ${valor2}, ${valor1}`);
}

/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/
for(let i = 0; i <= 10; i++){
    console.log(i)
}

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
let numInt = Number(prompt('Digite um número inteiro: '))
    for(let i = 0; i < 10; i++){
        console.log(numInt);
    }

/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/


let num;
let total = 0;

for (let i = 0; i < 5; i++) {
    num = Number(prompt("Digite um número: "));
    total += num;
}

console.log(`\n Soma total dos números: ${total}`);    


/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const number = Number(prompt("Diga um numero para ver a tabuada: "))

for(let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`)
}

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

function fatorial(){

    /*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

let numero = Number(prompt('Digite um número: '))

let fatorial = 1

for (let i = 1; i <= numero; i++) {
  fatorial *= i
}

console.log(`Fatorial: ${fatorial}`)
}
fatorial();

/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/


function fibonnaci(n) {
  if (n === 0) {
    return 0
  }
  else if( n===1){
    return 1
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log(fibonnaci(8))
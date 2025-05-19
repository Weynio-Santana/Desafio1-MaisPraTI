const prompt = require('prompt-sync')()

/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const numero = Number(prompt("Diga um numero para ver a tabuada: "))

for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}
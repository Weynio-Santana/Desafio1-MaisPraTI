const prompt = require('prompt-sync')()

//  1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const numero = Number(prompt(" Digite um numero e descubra se ele é par ou ímpar: "))

if (numero %2 ===0){
    console.log("O Numero é par")
}else{
    console.log(" O Numero é ímpar")
}

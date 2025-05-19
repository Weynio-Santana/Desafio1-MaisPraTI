const prompt = require('prompt-sync')()

/*2 Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/ 

const idade = Number(prompt("Digite a idade: "));

if (idade < 13) {
    console.log("Criança");
} else if (idade < 19) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
const prompt = require('prompt-sync')();


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

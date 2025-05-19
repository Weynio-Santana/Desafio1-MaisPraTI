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
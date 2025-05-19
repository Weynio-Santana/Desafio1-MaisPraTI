const prompt = require('prompt-sync')()
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
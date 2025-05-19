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
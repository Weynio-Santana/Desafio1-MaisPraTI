const prompt = require('prompt-sync')()

/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
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
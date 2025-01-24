// Alterar o conteúdo da tag h1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Função para exibir mensagem no console
function exibirMensagemConsole() {
    console.log('O botão foi clicado!');
}

// Função para exibir alerta
function exibirAlerta() {
    alert('Eu amo JS');
}

// Função para exibir prompt e concatenar a resposta
function exibirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }
}

// Função para somar dois números
function somarNumeros() {
    let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        alert(`O resultado da soma é: ${numero1 + numero2}`);
    } else {
        alert('Por favor, digite números válidos!');
    }
}

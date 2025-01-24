# js-curso-2-aula1---desafio

## Desafios:

### 1. Alterar o conteúdo da tag `h1`
Altere o conteúdo da tag `h1` com `document.querySelector` e atribua o seguinte texto: **Hora do Desafio**.

```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
```

### 2. Exibir mensagem no console
Crie uma função que exiba no console a mensagem **"O botão foi clicado"** sempre que o botão **Console** for pressionado.

```javascript
function exibirMensagemConsole() {
    console.log('O botão foi clicado!');
}
```

### 3. Exibir um alerta
Crie uma função que exiba um alerta com a mensagem: **"Eu amo JS"**, sempre que o botão **Alerta** for pressionado.

```javascript
function exibirAlerta() {
    alert('Eu amo JS');
}
```

### 4. Prompt com cidade do Brasil
Crie uma função que é executada quando o botão **Prompt** é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: **"Estive em {cidade} e lembrei de você"**.

```javascript
function exibirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }
}
```

### 5. Soma de dois números
Ao clicar no botão **Soma**, peça 2 números inteiros e exiba o resultado da soma em um alerta.

```javascript
function somarNumeros() {
    let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        alert(`O resultado da soma é: ${numero1 + numero2}`);
    } else {
        alert('Por favor, digite números válidos!');
    }
}
```


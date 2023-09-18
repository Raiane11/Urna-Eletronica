const resultInput = document.querySelector('input[name="result"]');
const resultVotosInput = document.querySelector('input[name="result-votos"]');
const buttons = document.querySelectorAll('.button');
const corrigeButton = document.querySelector('.button-2');
const confirmaButton = document.querySelector('.button-3');
const finishButton = document.querySelector('.button-finish');

let votosChapa1 = 0;
let votosChapa2 = 0;
let votosChapa3 = 0;

//Adiciona um ouvinte de eventos para cada botão númerico
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const currentValue = resultInput.value;
        const newValue = currentValue + button.textContent;
        resultInput.value = newValue;
    })
})

//Adiciona um ouvinte de eventos para o botão 'corrige'
corrigeButton.addEventListener('click', function () {
    const currentValue = resultInput.value;
    const newValue = currentValue.slice(0, -1);
    resultInput.value = newValue;
})

//Adiciona um ouvinte de eventos para o botão 'confirma'
confirmaButton.addEventListener('click', function () {
    const result = parseInt(resultInput.value);
    if (result === 1) {
        votosChapa1++;
    } else if (result === 2) {
        votosChapa2++;
    } else if (result === 3) {
        votosChapa3++;
    }
    resultInput.value = '';
});

//Adiciona um ouvinte de eventos para o botão 'finalizar'
finishButton.addEventListener('click', function () {
    let mensagemVencedor;
    if (votosChapa1 > votosChapa2 && votosChapa1 > votosChapa3) {
        mensagemVencedor = `🏆 A chapa 1 ganhou com ${votosChapa1} votos 🏆`;
    } else if (votosChapa2 > votosChapa1 && votosChapa2 > votosChapa3) {
        mensagemVencedor = `🏆 A chapa 2 ganhou com ${votosChapa2} votos 🏆`;
    } else if (votosChapa3 > votosChapa1 && votosChapa3 > votosChapa2) {
        mensagemVencedor = `🏆 A chapa 3 ganhou com ${votosChapa3} votos 🏆`;
    }
    if (confirm('Quer encerrar? Na moral mesmo?🤔')) {
        resultVotosInput.value = mensagemVencedor;
    }
});
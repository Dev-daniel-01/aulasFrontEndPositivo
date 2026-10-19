const btn_l = document.getElementById('btn-lg');
const btn_d = document.getElementById('btn-dl');

const btn_DuasCoisa = document.getElementById('btn-ligaEdesliga');

const lamp = document.getElementById('lamp')

const lamp2 = document.getElementById('lamp-2')

btn_l.addEventListener('click', ligar);
btn_d.addEventListener('click', desligar);
btn_DuasCoisa.addEventListener('click', mudar);

// Atividade 1
function ligar() {
    lamp.src = './assets/images/lampadaLigada.jpg';
    lamp.style.display = 'block';
    btn_l.style.backgroundColor = "Green";
    btn_d.style.backgroundColor = "Red";
}
function desligar() {
    lamp.src = './assets/images/lampadaDesligada.jpg';
    lamp.style.display = 'block';
    btn_l.style.backgroundColor = "red";
    btn_d.style.backgroundColor = "Green";
}

// Atividade 2

function mudar() {
    btn_DuasCoisa.style.color = "#fff";
    btn_DuasCoisa.style.padding = "10px 20px";
    if (lamp2.getAttribute('src') == './assets/images/lampadaDesligada.jpg') {
        lamp2.src = './assets/images/lampadaLigada.jpg';
        btn_DuasCoisa.style.backgroundColor = "Green";
        btn_DuasCoisa.textContent = "Ligado";
        // lamp2.setAttribute('src', './assets/images/lampadaLigada.jpg');
    } else {
        lamp2.src = './assets/images/lampadaDesligada.jpg';
        btn_DuasCoisa.style.backgroundColor = "red";
        btn_DuasCoisa.textContent = "Desligado";
        // lamp2.setAttribute('src', './assets/images/lampadaDesligada.jpg');
    }
}

// Atividade 3 (atividade 5 da aula)
const btn_v = document.getElementById('btnVisivel');
const lamp3 = document.getElementById('lamp-3');

btn_v.addEventListener('click', alternaExibirFigura);

function alternaExibirFigura() {
    if (lamp3.style.display === 'none') {
        lamp3.style.display = 'block';
    } else {
        lamp3.style.display = 'none';
    }
}

// Atividade 4 (atividade 6 da aula)
const caixa = document.getElementById('caixa');
const btn_add = document.getElementById('btn-add');
const btn_remove = document.getElementById('btn-remove');
const btn_toggle = document.getElementById('btn-toggle');

// via propriedade style (uma propriedade por vez, em camelCase)
caixa.style.backgroundColor = 'lightblue';
caixa.style.fontSize = '16px';

// via classList (classe inteira de uma vez)
btn_add.addEventListener('click', () => caixa.classList.add('destaque'));
btn_remove.addEventListener('click', () => caixa.classList.remove('destaque'));
btn_toggle.addEventListener('click', () => caixa.classList.toggle('destaque'));

// Atividade 1 da Semana - cor de fundo aleatória
const btn_cor = document.querySelector('#btnCorFundo');

btn_cor.addEventListener('click', alteraCorFundo);

function alteraCorFundo() { // cor = rgb(0-255, 0-255, 0-255)
    const cor = "rgb(" + rand(255) + "," + rand(255) + "," + rand(255) + ")";
    document.body.style.backgroundColor = cor;
}

// retorna um inteiro entre 0 e number (inclusive)
function rand(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Atividade 2 da Semana - número aleatório entre 0 e o número lido
const btn_ale = document.querySelector('#btnAleatorio');
const resultadoAleatorio = document.getElementById('resultadoAleatorio');

btn_ale.addEventListener('click', numeroAleatorio);

function numeroAleatorio() {
    const num = parseInt(prompt("Digite um número inteiro: "));

    if (isNaN(num) || num < 0) {
        resultadoAleatorio.textContent = "Digite um número inteiro válido (maior ou igual a 0).";
        return;
    }

    const resp = rand(num);
    console.log("Lido: " + num);
    console.log("Aleatório: " + resp);
    resultadoAleatorio.textContent = "Número lido: " + num + " | Número aleatório: " + resp;
}

// Atividade 3 da Semana - jogo de adivinhação
const MAX_TENTATIVAS = 4;
const inputPalpite = document.getElementById('palpite');
const btn_chutar = document.getElementById('btnChutar');
const btn_reiniciar = document.getElementById('btnReiniciar');
const mensagemJogo = document.getElementById('mensagemJogo');
const tentativasRestantes = document.getElementById('tentativasRestantes');

let numeroSecreto;
let tentativas;

btn_chutar.addEventListener('click', verificarPalpite);
btn_reiniciar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
    numeroSecreto = rand(10);
    tentativas = 0;
    inputPalpite.value = '';
    inputPalpite.disabled = false;
    btn_chutar.disabled = false;
    mensagemJogo.textContent = '';
    mensagemJogo.style.color = '';
    tentativasRestantes.textContent = "Tentativas restantes: " + MAX_TENTATIVAS;
}

function verificarPalpite() {
    const palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite) || palpite < 0 || palpite > 10) {
        mensagemJogo.textContent = "Digite um número entre 0 e 10.";
        mensagemJogo.style.color = 'orange';
        return;
    }

    tentativas++;
    const restantes = MAX_TENTATIVAS - tentativas;

    if (palpite === numeroSecreto) {
        mensagemJogo.textContent = "Parabéns! Você acertou o número " + numeroSecreto + " na tentativa " + tentativas + "!";
        mensagemJogo.style.color = 'green';
        finalizarJogo();
    } else if (restantes === 0) {
        mensagemJogo.textContent = "Fim de jogo! O número secreto era " + numeroSecreto + ".";
        mensagemJogo.style.color = 'red';
        finalizarJogo();
    } else if (palpite < numeroSecreto) {
        mensagemJogo.textContent = "Tentativa " + tentativas + ": " + palpite + " está errado. O número secreto é MAIOR.";
        mensagemJogo.style.color = 'blue';
    } else {
        mensagemJogo.textContent = "Tentativa " + tentativas + ": " + palpite + " está errado. O número secreto é MENOR.";
        mensagemJogo.style.color = 'blue';
    }

    tentativasRestantes.textContent = "Tentativas restantes: " + restantes;
    inputPalpite.value = '';
    inputPalpite.focus();
}

function finalizarJogo() {
    inputPalpite.disabled = true;
    btn_chutar.disabled = true;
}

iniciarJogo();

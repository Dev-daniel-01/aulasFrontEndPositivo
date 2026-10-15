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
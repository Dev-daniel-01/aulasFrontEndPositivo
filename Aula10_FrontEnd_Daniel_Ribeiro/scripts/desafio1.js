// Desafio 1: Contador Persistente de Cliques
const btn_add = document.getElementById('btn_Adicionar');
const btn_zerar = document.getElementById('btn_Zerar');
const span_cont = document.getElementById('contador');

// O localStorage guarda texto, então convertemos para número.
// Se ainda não existir nada salvo, começa em zero.
let cliques = Number(localStorage.getItem('cliques')) || 0;
span_cont.textContent = cliques;

btn_add.addEventListener('click', adicionarClique);
function adicionarClique() {
    cliques++;
    localStorage.setItem('cliques', cliques);
    span_cont.textContent = cliques;
}

btn_zerar.addEventListener('click', zerarContador);
function zerarContador() {
    cliques = 0;
    localStorage.setItem('cliques', cliques);
    span_cont.textContent = cliques;
}

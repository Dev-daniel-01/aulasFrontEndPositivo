// Atividade 3: Tema (Dark/Light Mode) Persistente
const btn_alt = document.getElementById('btn_Alternar');
const txt_modo = document.getElementById('modoAtual');

// Recupera o tema salvo. Se não existir, usa "light" como padrão.
let tema = localStorage.getItem('tema') || 'light';
aplicarTema();

btn_alt.addEventListener('click', alternarModo);
function alternarModo() {
    if (tema == 'light') {
        tema = 'dark';
    } else {
        tema = 'light';
    }
    localStorage.setItem('tema', tema);
    aplicarTema();
}

function aplicarTema() {
    if (tema == 'dark') {
        document.body.classList.add('dark');
        txt_modo.textContent = 'Dark';
    } else {
        document.body.classList.remove('dark');
        txt_modo.textContent = 'Light';
    }
}

// Atividade 1: Saudação Persistente
const btn_s = document.getElementById('btn_Salvar');
const btn_l = document.getElementById('btn_Limpar');
const msn_s = document.getElementById('saudacao');
const nome = document.getElementById('nome');

// Ao abrir a página, verifica se já existe um nome salvo
const nome_salvo = localStorage.getItem('usuario');
if (nome_salvo) {
    msn_s.textContent = `Bem-vindo de volta, ${nome_salvo}!!!`;
}

btn_s.addEventListener('click', salvarDados);
function salvarDados() {
    if (nome.value != "") {
        localStorage.setItem('usuario', nome.value);
        msn_s.textContent = `Nome salvo com sucesso: ${nome.value}!`;
        nome.value = "";
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

btn_l.addEventListener('click', limpaTudo);
function limpaTudo() {
    localStorage.clear();
    msn_s.textContent = "";
}

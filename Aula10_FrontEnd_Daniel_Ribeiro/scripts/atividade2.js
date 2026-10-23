// Atividade 2: Saudação Persistente (oculta o input quando já existe nome salvo)
const btn_s = document.getElementById('btn_Salvar');
const btn_l = document.getElementById('btn_Limpar');
const msn_s = document.getElementById('saudacao');
const nome = document.getElementById('nome');
const form = document.getElementById('formNome');

// Ao abrir a página, se já existir nome salvo, mostra a saudação e esconde o formulário
const nome_salvo = localStorage.getItem('usuario');
if (nome_salvo) {
    msn_s.textContent = `Bem-vindo de volta, ${nome_salvo}!!!`;
    form.style.display = "none";
}

btn_s.addEventListener('click', salvarDados);
function salvarDados() {
    if (nome.value != "") {
        localStorage.setItem('usuario', nome.value);
        msn_s.textContent = `Nome salvo com sucesso: ${nome.value}!`;
        nome.value = "";
        form.style.display = "none";
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

btn_l.addEventListener('click', limpaTudo);
function limpaTudo() {
    localStorage.clear();
    msn_s.textContent = "";
    form.style.display = "block"; // mostra o formulário de novo
}

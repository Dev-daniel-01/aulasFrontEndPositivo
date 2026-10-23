// Desafio 2: Bloco de Notas Persistente
const txt_nota = document.getElementById('txt_Nota');
const btn_salvar = document.getElementById('btn_SalvarNota');
const corpo = document.getElementById('corpoTabela');

// O localStorage só guarda texto: usamos JSON.parse para transformar
// o texto salvo de volta em array. Se não existir nada, começa vazio.
let notas = JSON.parse(localStorage.getItem('notas')) || [];
mostrarNotas();

btn_salvar.addEventListener('click', salvarNota);
function salvarNota() {
    if (txt_nota.value != "") {
        notas.push(txt_nota.value);
        gravarStorage();
        mostrarNotas();
        txt_nota.value = "";
    } else {
        alert("Por favor, digite uma anotação.");
    }
}

function excluirNota(indice) {
    notas.splice(indice, 1); // remove 1 item na posição "indice"
    gravarStorage();
    mostrarNotas();
}

// JSON.stringify transforma o array em texto para salvar no localStorage
function gravarStorage() {
    localStorage.setItem('notas', JSON.stringify(notas));
}

// Monta a tabela: 1ª coluna com a nota, 2ª coluna com o botão de excluir
function mostrarNotas() {
    corpo.innerHTML = "";

    if (notas.length == 0) {
        corpo.innerHTML = `<tr><td colspan="2">Nenhuma anotação salva.</td></tr>`;
        return;
    }

    for (let i = 0; i < notas.length; i++) {
        const linha = document.createElement('tr');

        const colNota = document.createElement('td');
        colNota.textContent = notas[i];

        const colAcao = document.createElement('td');
        const btn_excluir = document.createElement('button');
        btn_excluir.textContent = "Excluir";
        btn_excluir.className = "btnZerar";
        btn_excluir.addEventListener('click', function () {
            excluirNota(i);
        });
        colAcao.appendChild(btn_excluir);

        linha.appendChild(colNota);
        linha.appendChild(colAcao);
        corpo.appendChild(linha);
    }
}

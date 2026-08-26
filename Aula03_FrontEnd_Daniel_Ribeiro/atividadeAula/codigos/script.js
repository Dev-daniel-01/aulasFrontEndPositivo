const nascimento = document.getElementById("nascimento");
const idade = document.getElementById("idade");

nascimento.addEventListener("change", function () {
    if (nascimento.value === "") {
        idade.value = "";
        return;
    }

    const dataNasc = new Date(nascimento.value);
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataNasc.getFullYear();

    // ainda não fez aniversário este ano? tira 1
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || mes === 0 && hoje.getDate() < dataNasc.getDate()) {
        anos = anos - 1;
    }

    idade.value = anos;
});

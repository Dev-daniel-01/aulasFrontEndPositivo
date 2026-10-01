const formulario = document.getElementById("formulario");
const campoNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

const formulario2 = document.getElementById("formulario2");
const campoNome = document.getElementById("nome");
const campoSalario = document.getElementById("salario");
const campoReajuste = document.getElementById("reajuste");
const resultadoSalario = document.getElementById("resultadoSalario");


formulario.addEventListener("submit", function (event) {
    // Impede o comportamento padrão do form: recarregar a página
    event.preventDefault();

    const numero = Number(campoNumero.value);

    if (!Number.isInteger(numero)) {
        resultado.textContent = "Digite um número inteiro válido!";
        return;
    } else {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        resultado.innerHTML = `Antecessor: ${antecessor}<br>Sucessor: ${sucessor}`;
    }
});

formulario2.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = campoNome.value;
    const salario = Number(campoSalario.value);
    const percentual = Number(campoReajuste.value);

    const novoSalario = salario + (salario * percentual / 100);

    resultadoSalario.textContent =
        `Novo salário para ${nome} é: ${novoSalario.toFixed(2)}`;
});


let nome = "Daniel"
let sobrenome = "Ribeiro"
console.log(nome + " " + sobrenome)
console.log(nome, typeof(nome))
console.log(true, typeof(true))
const PI = 3.1416
console.log(PI, typeof(PI))


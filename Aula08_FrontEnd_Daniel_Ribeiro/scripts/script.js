function totaliza(){
    console.log("Clicou no button totaliza")

    let estoque = [10, 20, 30, 40, 50, 60, 70, 80]
    let i;
    let soma = 0

    console.log(estoque[3])
    console.log(estoque.indexOf(60))
    for( i= 0; i < estoque.length; i++){
        soma = soma + estoque[i]
        console.log("parcial " + soma)
        // console.log(estoque[i])
    }
}

function calculaSituacao() {
    console.log("Clicou no button calculaSituacao")

    let nota1 = parseFloat(prompt("Digite a primeira nota:"))
    let nota2 = parseFloat(prompt("Digite a segunda nota:"))
    let nota3 = parseFloat(prompt("Digite a terceira nota:"))

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite apenas números válidos!")
        return
    }

    let media = (nota1 + nota2 + nota3) / 3
    let situacao

    if (media >= 6) {
        situacao = "APROVADO"
    } else if (media < 4) {
        situacao = "REPROVADO"
    } else {
        situacao = "RECUPERAÇÃO"
    }

    console.log("Média: " + media.toFixed(2))
    console.log("Situação: " + situacao)
    alert("Média: " + media.toFixed(2) + "\nSituação: " + situacao)
}

// ATIVIDADE 2

let alunos = [
    { nome: "Alice", nota: 92 },
    { nome: "Bento", nota: 38 },
    { nome: "Carol", nota: 88 },
    { nome: "Marcos", nota: 65 },
    { nome: "Elaine", nota: 72 }
]

function listaAlunos() {
    console.log("Clicou no button listaAlunos")

    let texto = "<h2>Lista de Alunos</h2>"

    alunos.forEach(function(item) {
        texto = texto + "<p>O aluno " + item.nome + ` teve nota ${item.nota}</p>`
    })

    document.getElementById("resultado").innerHTML = texto
}

function maiorNota() {
    console.log("Clicou no button maiorNota")

    let maior = alunos[0]

    alunos.forEach(function(item) {
        if (item.nota > maior.nota) {
            maior = item
        }
    })

    document.getElementById("resultado").innerHTML =
        "<h2>Aluno com MAIOR nota</h2><p>" + maior.nome + ` - nota ${maior.nota}</p>`
}

function menorNota() {
    console.log("Clicou no button menorNota")

    let menor = alunos[0]

    alunos.forEach(function(item) {
        if (item.nota < menor.nota) {
            menor = item
        }
    })

    document.getElementById("resultado").innerHTML =
        "<h2>Aluno com MENOR nota</h2><p>" + menor.nome + ` - nota ${menor.nota}</p>`
}

function adicionaAluno() {
    console.log("Clicou no button adicionaAluno")

    let nome = prompt("Digite o nome do aluno:")
    let nota = parseFloat(prompt("Digite a nota do aluno:"))

    if (!nome || isNaN(nota)) {
        alert("Dados inválidos! Informe um nome e uma nota numérica.")
        return
    }

    alunos.push({ nome: nome, nota: nota })
    alert("Aluno " + nome + " adicionado com sucesso!")
    listaAlunos()
}


// ATIVIDADE 3

let atletas = [
    { nome: "Marta", idade: 40, altura: 1.62, esporte: "Futebol" },
    { nome: "Rebeca Andrade", idade: 27, altura: 1.55, esporte: "Ginástica" },
    { nome: "Victor Wembanyama", idade: 22, altura: 2.24, esporte: "Basquete" },
    { nome: "Rayssa Leal", idade: 18, altura: 1.58, esporte: "Skate" },
    { nome: "Gabriel Medina", idade: 32, altura: 1.80, esporte: "Surfe" },
    { nome: "Darlan Romani", idade: 35, altura: 1.88, esporte: "Arremesso de Peso" },
    { nome: "Bia Haddad", idade: 30, altura: 1.85, esporte: "Tênis" }
]

function mostraAtleta(atleta) {
    return "<p>" + atleta.nome + " - " + atleta.idade + " anos - " +
        atleta.altura.toFixed(2) + " m - " + atleta.esporte + "</p>"
}

function listaAtletas() {
    console.log("Clicou no button listaAtletas")

    let texto = "<h2>Lista de Atletas</h2>"

    for (let i = 0; i < atletas.length; i++) {
        texto = texto + mostraAtleta(atletas[i])
    }

    document.getElementById("resultado").innerHTML = texto
}

function atletaMaisAlto() {
    console.log("Clicou no button atletaMaisAlto")

    let maisAlto = atletas[0]

    for (let i = 1; i < atletas.length; i++) {
        if (atletas[i].altura > maisAlto.altura) {
            maisAlto = atletas[i]
        }
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Atleta mais alto</h2>" + mostraAtleta(maisAlto)
}

function atletaMaisVelho() {
    console.log("Clicou no button atletaMaisVelho")

    let maisVelho = atletas[0]

    for (let i = 1; i < atletas.length; i++) {
        if (atletas[i].idade > maisVelho.idade) {
            maisVelho = atletas[i]
        }
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Atleta mais velho</h2>" + mostraAtleta(maisVelho)
}

function adicionaAtleta() {
    console.log("Clicou no button adicionaAtleta")

    let nome = prompt("Digite o nome do atleta:")
    let idade = parseInt(prompt("Digite a idade do atleta:"))
    let altura = parseFloat(String(prompt("Digite a altura do atleta (ex: 1.80):")).replace(",", "."))
    let esporte = prompt("Digite o esporte do atleta:")

    if (!nome || isNaN(idade) || isNaN(altura) || !esporte) {
        alert("Dados inválidos! Preencha todos os campos corretamente.")
        return
    }

    atletas.push({ nome: nome, idade: idade, altura: altura, esporte: esporte })
    alert("Atleta " + nome + " adicionado com sucesso!")
    listaAtletas()
}

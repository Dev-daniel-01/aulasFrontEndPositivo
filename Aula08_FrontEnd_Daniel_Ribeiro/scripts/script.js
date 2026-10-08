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
localStorage.setItem("nome", "Daniel Ribeiro");
localStorage.setItem("Sobrenome", "Ribeiro");

let lista = ["Abacaxi", "Limão", 50, 3.1416]
localStorage.setItem("lista", lista)

let msn = document.getElementById("conteudo")
msn.innerHTML = localStorage.getItem("lista");
// msn.addEventListener("click", gravaMsn)


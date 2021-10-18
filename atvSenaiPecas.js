let peso = 100.5;
if(peso > 100){
    console.log("Peso adequado")
} else {
console.log("Peso insuficiente")
}

let listaPecas = ["amortecedor", "virabrequim", "vela", "bateria", "radiador", "correia", "carter", "ignição", "embreagem"]; //array, vetor! varios valores em uma variável.

let numeroPecas = listaPecas.length

if (listaPecas.length < 10) { //length refere o número de itens da lista
    console.log("A lista ainda possui espaço.")
} else {
    console.log("Lista cheia.")
}

let nomePeca = "amortecedor"

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido")   
} else {
    console.log("Nome da peça precisa ter mais de 3 caracteres.")
}
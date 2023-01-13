let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

// Capturar elementos do DOM
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let quantidadeProduto01 = document.getElementById("quantidade-produto-01")

// Declarar as funções
function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1
}
console.log(typeof quantidadeProduto01.value)

// Definir o(s) evento(s)
btnAdicionarProduto01.addEventListener("click", adicionarUm)











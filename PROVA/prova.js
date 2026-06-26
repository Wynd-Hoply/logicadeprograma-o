class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

let i = 0
let j = 0

let valorTotal = 0
let acimaDe500 = 0
let maisValioso = 0
let precisaRepo = 0

let produtos = [
    new Produto("Pasta térmica A", 10, 40),
    new Produto("Pasta termica B", 20, 40),
    new Produto("Pasta termica C", 30, 40),
    new Produto("Pasta termica D", 40, 4),
    new Produto("Pulseira Antiestática A", 50, 40),
    new Produto("Pulseira Antiestática B", 60, 40),
    new Produto("Pulseira Antiestática C", 70, 40),
    new Produto("Pulseira Antiestática D", 80, 4)
]

function calcularValorEstoque(produtos) {
    return produtos.preco * produtos.quantidade
}

console.log("==========================")
for (let i = 0; i < produtos.length; i++) {
    valorTotal += calcularValorEstoque(produtos[i])
    if (produtos[i].quantidade < 5) {
        console.log(`${produtos[i].nome} Precisa Repor Estoque!`)
        precisaRepo++
    } else {
        console.log(`${produtos[i].nome} Está com Estoque OK!`)
    }
}
console.log("==========================")

while (i < produtos.length) {
    k = j
    l = i
    if (calcularValorEstoque(produtos[i]) > 500) {
        acimaDe500++
    }
    i++
}

for (let i = 0; i < produtos.length; i++) {
    if (calcularValorEstoque(produtos[i]) > calcularValorEstoque(produtos[maisValioso])) {
        maisValioso = i
    } 
}

console.log(`O valor total é: ${valorTotal}`)
console.log(`O estoque mais valioso é: ${produtos[maisValioso].nome}`)
console.log(`A quantidade de produtos que precisam de reposição é: ${precisaRepo}`)

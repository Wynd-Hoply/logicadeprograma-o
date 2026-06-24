class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    aplicarDesconto() {
        return this.preco * 0.9 //desconto de 10%
    }
    exibirInfo() {
        console.log(`${this.nome}: R$ ${this.preco}`)
        console.log(`com desconto: R$ ${this.aplicarDesconto()}`)
    }
}
let note = new Produto("Notebook", 3000)
let camaro = new Produto("Camaro", 8000)
note.exibirInfo();
console.log()
camaro.exibirInfo()

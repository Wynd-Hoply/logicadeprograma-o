function calcularDesconto(preco, percentual) {
    desconto = percentual/100
    return preco - (preco * desconto)
}
console.log(calcularDesconto(100, 10))
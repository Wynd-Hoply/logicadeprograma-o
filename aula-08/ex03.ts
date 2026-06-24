function calcularDesconto(preco: number, percentual:number):number {
    let desconto = percentual/100
    return preco - (preco * desconto)
}
console.log(calcularDesconto(100, 10))
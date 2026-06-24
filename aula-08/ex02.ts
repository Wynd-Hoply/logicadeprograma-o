function calcularArea(base: number, altura: number):number {
    return base * altura
}

function converterCelsuis(temp: number):number {
    return (temp * 9/5) + 32
}

function saudacaoPersonalizada(nome: string):string {
    return nome
}

console.log(calcularArea(85, 92))
console.log(converterCelsuis(20))
console.log(saudacaoPersonalizada("Ezerrê"))
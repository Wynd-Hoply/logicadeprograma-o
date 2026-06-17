let n1 = 5
let n2 = 2
let escolha = "d"
let maior
let menor

//maior
if (n1 > n2) {
    maior = n1
} else {
    maior = n2
}
//menor
if (maior = n1) {
    menor = n2
} else {
    menor = n1
}
//variaveis de calculo
let media = (n1+n2) / 2
let diff = maior - menor
let produto = n1 * n2
let div = n1 / n2

switch (escolha) {
    case "a":
        console.log(`Média aritmética entre os números digitados é ${media}`)
        break;
    case "b":
        console.log(`Diferença do maior pelo menor é ${diff}`)
        break;
    case "c":
        console.log(`Produto entre os números digitados é ${produto}`)
        break;
    case "d":
        console.log(`Divisão do primeiro pelo segundo é ${div}`)
        break;
    default:
        console.log(`Código errado`)
}
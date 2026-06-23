let matriz = [
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5],
    [5, 5]
];

let media 
let soma = 0

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        soma += matriz[i][j]
    }
    media = soma / 10
}
console.log(`a média é: ${media}`)
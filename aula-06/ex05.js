let matriz = [
    [7, 8, 3, 4, 6],
    [5, 5, 5, 7, 9],
    [5, 5, 4, 4, 7],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5]
];

let matriz2 = [
    [7, 8, 3, 4, 6],
    [5, 5, 5, 7, 9],
    [5, 5, 4, 4, 7],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5]
];

let alunos = ["pedro", "joao", "gabriel", "ana", "agatha"]

let media = matriz[0] / matriz.length
let media2 = matriz2[0] / matriz.length

for (let i = 0; i < matriz.length; i++) {
    let soma = 0
    let soma2 = 0
    for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j]
    soma2 += matriz2[i][j]
    }
    console.log(alunos[i])
    media = soma / matriz[i].length
    media2 = soma2 / matriz2[i].length
    console.log(matriz[i])
    console.log(media)
    console.log(matriz2[i])
    console.log(media2)
}

let matriz = [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5]
];

let matriz2 = [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5]
];

let matriz3 = []

for (let i = 0; i < 5; i++) {
    matriz3[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz3[i][j] = matriz2[i][j]+matriz[i][j];
    }
}
console.log("Matriz A")
console.log(matriz)
console.log("Matriz B")
console.log(matriz2)
console.log("Média")
console.log(matriz3)
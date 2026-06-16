let numA = 9
let quadrado = numA ** 2;

let numB = 0;
let adivinha
while (adivinha != numA) {
    numB = numB + 1 
    adivinha = numB * numB
}

console.log(`seu numero é ${numA}`)
console.log(`o quadrado dele é ${quadrado}`)
console.log(`a raiz dele é ${numB}`)
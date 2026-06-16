let numA = 9
let quadrado = numA ** 2;

let numB = 0;
let adivinha = numB * numB
while (adivinha != numA) {
    numB = numB + 1 
    adivinha = numB 
}

console.log(`seu numero é ${numA}`)
console.log(`o quadrado dele é ${quadrado}`)
console.log(`a raiz dele é ${adivinha}`)
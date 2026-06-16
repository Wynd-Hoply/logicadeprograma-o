let n1 = 19
let divisao1 = n1 % 4
let divisao2 = n1 % 5

if (divisao1 === 0 && divisao2 === 0) {
    console.log(`${n1} é divisível por 5 e 4`)
}
else {
    console.log(`${n1} não é divisível por 5 e 4`)
}
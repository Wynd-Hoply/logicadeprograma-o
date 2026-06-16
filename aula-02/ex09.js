let valorA = 20;
let valorB = 30;
const AUMENTOA = 30;
const DESCONTOB = 25;
let acrescimoA = valorA + (valorA * (AUMENTOA/100));
let descontoB = valorB + (valorB * (DESCONTOB/100));

console.log(`seu acrescimo valorA é: ${acrescimoA.toFixed(2)}`)
console.log(`seu desconto do valorB é: ${descontoB.toFixed(2)}`)
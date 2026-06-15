let vHora = 15;
let nHoraMes = 180;
const DESCONTOINSSS = 0.10;

let salario = vHora * nHoraMes;
let desconto = salario * DESCONTOINSSS;
let salarioTotal = salario - desconto;

console.log(`O seu salário líquido é: ${salarioTotal}`)
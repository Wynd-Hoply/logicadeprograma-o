let i = 0;
let soma = 0;

do {
    soma = soma + i;
    i = i += 2;
} while (i <= 500);

console.log(`A soma de tudo é: ${soma}`);


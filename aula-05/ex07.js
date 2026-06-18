let i = 0;
let soma = 0;

while (i <= 500) {
  soma = soma + i;
  i = i += 2;
}

console.log(`A soma de tudo é: ${soma}`);
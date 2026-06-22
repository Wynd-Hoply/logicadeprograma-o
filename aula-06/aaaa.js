let nomes = ["Asdrúbal", "Astrogildo", "Cleyto", "Vandineuza", "Zoroastra"];

let op = "sim".toUpperCase();
let nome = "Cleyto";
let mudaOP = 1; //simula o input do usuário

while (op == "SIM") {
  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
      console.log(`${nome} existe no vetor`);
    }
  }

  nome = "Zoroastra";
  mudaOP++; // simula o input do usuário
  if (mudaOP == 3) {
    op = "NÃO";
  }
}
________________________________________________________




let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let b = [];

for (let i = 0; i < a.length; i++) {
    b[19-i] = a[i];
}

console.log(a);
console.log(b);

_________________________________________________________

let nome = ["Amanda","Bruna","César","Danilo","Eduardo"];
let pr1 = [5,2,6,7,8];
let pr2 = [6,4,2,8,9];
let media = [];
let sit = [];

for (let i = 0; i < 5; i++) {
    media[i] = (pr1[i]+pr2[i])/2;
    if (media[i] >= 5) {
        sit[i] = "Aprovado";
    } else {
        sit[i] = "Reprovado";
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`Nome: ${nome[i]}\t
        Prova 1: ${pr1[i]}\tProva2: ${pr2[i]}\tMédia: ${media[i]}
        \tSituação: ${sit[i]}`)
}
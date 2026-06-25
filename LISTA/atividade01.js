class Livros {
  constructor(titulo, autor, quantidade, emprestados) {
    this.titulo = titulo;
    this.autor = autor;
    this.quantidade = quantidade;
    this.emprestados = emprestados;
  }
}

let livros = [
  new Livros("Silver Eyes", "Scoot", 15, 13),
  new Livros("Dom Casemiro", "Casemiro", 40, 40),
  new Livros("Pequeno Ney", "Neymar", 38, 35),
  new Livros("Harry Potter e o Cálice de Vini", "ViniJR", 60, 60),
  new Livros("O Senhor dos Anéis e o Retorno de Kaká", " Kaká", 45, 35),
  new Livros("Romeu e JuliKane", "Harry Kane", 40, 40),
];
let disponivel = 0
let exempTotal = 0
let indisponivel = 0

function livrosDisponiveis(Livros) {
  return Livros.quantidade - Livros.emprestados;
}

for (let i = 0; i < livros.length; i++) {
  if (livrosDisponiveis(livros[i]) > 0) {
    console.log(`${livros[i].titulo} está disponível`)
    disponivel++
    exempTotal += livrosDisponiveis(livros[i]) 
  } else {
    console.log(`${livros[i].titulo} não está disponível`)
    indisponivel++
  }
}

let i = 0
while (i < livros.length) {
    console.log(`${livros[j].titulo} tem ${livrosDisponiveis(livros[j])} disponível`)
    j++
}


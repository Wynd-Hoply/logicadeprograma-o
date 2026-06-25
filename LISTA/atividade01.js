class Livro {
  constructor(titulo, autor, quantidade, emprestados) {
    this.titulo = titulo;
    this.autor = autor;
    this.quantidade = quantidade;
    this.emprestados = emprestados;
  }
}

let livros = [
  new Livro("Silver Eyes", "Scoot", 15, 13),
  new Livro("Dom Casemiro", "Casemiro", 40, 40),
  new Livro("Pequeno Ney", "Neymar", 38, 35),
  new Livro("Harry Potter e o Cálice de Vini", "ViniJR", 60, 60),
  new Livro("O Senhor dos Anéis e o Retorno de Kaká", " Kaká", 45, 35),
  new Livro("Romeu e JuliKane", "Harry Kane", 40, 40),
];
let disponivel = 0
let exempTotal = 0
let indisponivel = 0

function livrosDisponiveis(livros) {
  return livros.quantidade - livros.emprestados;
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
    console.log(`${livros[i].titulo} tem ${livrosDisponiveis(livros[i])} disponível`)
    i++
}


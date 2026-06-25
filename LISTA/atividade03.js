class Aluno { //CLASSE
    constructor(nome, idade, frequencia) {
        this.nome = nome
        this.idade = idade
        this.frequencia = frequencia
    }
}

let i = 0
let maiorIdades = 0
let quantidadeFreq = 0
let quantidadeFalt = 0

let alunos = [ //VETOR
    new Aluno("Amorim", 21, 13),
    new Aluno("Bernardo", 21, 13),
    new Aluno("Caio", 17, 13),
    new Aluno("Daniel", 21, 10),
    new Aluno("Eustácio", 21, 11),
    new Aluno("Fernanda", 17, 13), 
    new Aluno("Gabriela", 17, 13),
    new Aluno("Hinata", 17, 9),
    new Aluno("Ícaro", 21, 5),
    new Aluno("John", 21, 3)
]

function classificarAluno(alunos) {
    if (alunos.frequencia >= 12) {
        quantidadeFreq++
        return "Frequente"
    } else {
        quantidadeFalt++
        return "Baixa Frequência"
    }
}

for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome}`)
    console.log(classificarAluno(alunos[i]))
}

while (i < alunos.length) {
    if (alunos[i].idade >= 18) {
        maiorIdades++
    }
    i++
}

console.log(`O total é: ${alunos.length}`)
console.log(`O total de maiores de idade é: ${maiorIdades}`)
console.log(`O total de frequentes é: ${quantidadeFreq}`)
console.log(`O total de faltantes é: ${quantidadeFalt}`)
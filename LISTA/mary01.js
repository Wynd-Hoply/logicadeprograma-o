class Aluno {
    constructor(nome, idade, frequencia) {
        this.nome = nome
        this.idade = idade
        this.frequencia = frequencia
    }
}

let i = 0
let maiorIdades = 0
let alunosFreq = 0
let alunosFalt = 0


let alunos = [
    new Aluno("Cleiton", 20, 11),
    new Aluno("Cleiton", 20, 11),
    new Aluno("Cleiton", 20, 11),
    new Aluno("Cleiton", 20, 11),
    new Aluno("Cleiton", 20, 11),
    new Aluno("Claudia", 17, 13),
    new Aluno("Claudia", 17, 13),
    new Aluno("Claudia", 17, 13),
    new Aluno("Claudia", 17, 13),
    new Aluno("Claudia", 17, 13),
]

function classficarAluno(alunos) {
    if(alunos.frequencia >= 12) {
        alunosFreq++
        return "Frequente"
    } else {
        alunosFalt++
        return "Frequencia Baixa"
    }
}

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
    console.log(classficarAluno(alunos[i]))
    console.log()
}

while (i < alunos.length) {
    if (alunos[i].idade >= 18) {
        maiorIdades++
    }
    i++
}

console.log(`A quantidade de alunos é: ${alunos.length}`)
console.log(`A quantidade que são maiores de idade é: ${maiorIdades}`)
console.log(`A quantidade de alunos frequentes é: ${alunosFreq}`)
console.log(`A quantidade de alunos que não são frequentes é: ${alunosFalt}`)
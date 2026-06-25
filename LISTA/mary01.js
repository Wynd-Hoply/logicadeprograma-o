class Aluno {
    constructor(nome, idade, frequencia) {
        this.nome = nome
        this.idade = idade
        this.frequecia = frequencia
    }
}

let alunos = [
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
    if(alunos.frequecia >= 12) {
       return {clas: "Alta Frequencia", freq: true}
    } else {
        return {clas: "Baixa Frequencia", freq:false}
    }
}


for (let i = 0; i < alunos.length; i++) {
    console.log("------------")
    console.log(`${alunos[i].nome}`)
    console.log(classificarAluno(alunos[i]).clas)
}


let i = 0
let maiorIdades = 0
while (i < alunos.length) {
    if (alunos[i].idade >= 18) {
        maiorIdades++
    }
    i++
}

console.log("=================")

console.log(`O total de alunos é ${alunos.length}\n`)
console.log(`Os alunos Maiores de idade são: `)

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].idade >= 18) {
        console.log(`${alunos[i].nome} é maior de idade`)
    }
}

console.log(`Os alunos Frequentes são: `)
for (let i = 0; i < alunos.length; i++) {
    if (classificarAluno(alunos[i]).freq) {
        console.log(`${alunos[i].nome}`)
    }
}

console.log(`Os alunos com Baixa Frequencia são: `)
for (let i = 0; i < alunos.length; i++) {
    if (!classificarAluno(alunos[i]).freq) {
        console.log(`${alunos[i].nome}`)
    }
}
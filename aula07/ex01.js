let alunos = [
    {nome: "Iarly Gabriel de Araújo", idade: 20},
    {nome: "Gabriel Gabriel", idade:22},
    {nome: "Lívia Kethlen", idade:18},
    {nome: "Emily", idade:18},
    {nome: "Agatha", idade:17},
    {nome: "Alyssa", idade:22},
    {nome: "João Pedro", idade:18},
    {nome: "Isabely", idade:20},
]

for (aluno of alunos) {
    if (aluno.idade >= 18) {
        console.log(`${aluno.nome} ja pode ser preso`)
    }
    else {
        console.log(`${aluno.nome} Você é NENEM!`)
    }
}
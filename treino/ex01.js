class Animal {
    constructor(nome, idade, peso) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }
}

let i = 0
let maiorDe5 = 0
let porteGrande = 0
let portePequeno = 0

let animais = [
    new Animal("Sebastião", 5, 21),
    new Animal("Sebastião", 6, 21),
    new Animal("Sebastião", 7, 24),
    new Animal("Sebastião", 8, 25),
    new Animal("Sebastião", 9, 23),
    new Animal("Sebastião", 1, 6),
    new Animal("Sebastião", 2, 7),
    new Animal("Sebastião", 3, 8),
    new Animal("Sebastião", 4, 9),
    new Animal("Sebastião", 4, 3)
]

function classificarAnimais(animais) {
    if (animais.peso >= 20) {
        porteGrande++
        return "Grande Porte"
    } else {
        portePequeno++
        return "Pequeno Porte"
    }
}

for (let i = 0; i < animais.length; i++) {
    console.log(animais[i].nome)
    console.log(`É de ${classificarAnimais(animais[i])}`)
}


while (i < animais.length) {
    if (animais[i].idade >= 5) {
        maiorDe5++
    }
    i++
}

console.log(`A quantidade de animais é: ${animais.length}`)
console.log(`A quantidade de animais com 5 anos ou mais é: ${maiorDe5}`)
console.log(`A quantidade de animais de Grande Porte é: ${porteGrande}`)
console.log(`A quantidade de animais de Pequeno Porte é: ${portePequeno}`)
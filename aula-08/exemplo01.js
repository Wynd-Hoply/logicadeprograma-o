class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    faleNome() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("Iarly", 20)
pessoa1.faleNome()
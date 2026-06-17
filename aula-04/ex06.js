//Escolha da pessoa
let pesoNaTerra = 70
let escolha = 1
//
let gravidadeRelativa, pesoNoNeta

switch (escolha) {
    case 1:
        gravidadeRelativa = 0.37
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Mercúrio: ${pesoNoNeta}`)
        break;
    case 2:
        gravidadeRelativa = 0.88
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Vênus: ${pesoNoNeta}`)
        break;
    case 3:
        gravidadeRelativa = gravidadeRelativa + 0.38
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Marte: ${pesoNoNeta}`)
        break;
    case 4:
        gravidadeRelativa = 2.64
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Júpiter: ${pesoNoNeta}`)
        break;
    case 5:
        gravidadeRelativa = 1.15
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Saturno: ${pesoNoNeta}`)
        break;
    case 6:
        gravidadeRelativa = 1.17
        pesoNoNeta = (pesoNaTerra) * gravidadeRelativa
        console.log(`Seu peso no planeta Urano: ${pesoNoNeta}`)
        break;
    default:
        console.log(`Código errado!`)
}
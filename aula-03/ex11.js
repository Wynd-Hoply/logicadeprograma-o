let n1 = 6670
let n2 
let n3
let calculo

if (n1 >= 100 && n1 <= 999) {
    n2 = n1 / 100
    n3 = (n1 % 100) / 100 //ISSO FOI DE GENIO, GO DRINKING
    calculo = n2 - n3 
        console.log(calculo)
} else if (n1 >= 1000) {
    console.log("Po paizão, de 1000 pra cima já é planeta")
}
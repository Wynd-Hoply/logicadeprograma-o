let nomes = ["Clayton", "Rasta", "Fari"]
let nome
let mudaOp = 1

let op = "sim".toUpperCase()

while (op == "SIM") {
    nome = "Clayton"

    for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i]) {
            console.log("Existe na listinha pow")
        }
    }

    mudaOp++
    if (mudaOp == 3)
    {
        op = "não".toUpperCase()
        console.log("Não está na lista pai.")
    }
}
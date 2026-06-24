function apresentar() {
    console.log("Bem-vindo ao curso de JavaScript!")
}

function exibirData() {
    console.log(new Date().toLocaleDateString())
}

function exibirHora() {
    console.log(new Date().toLocaleTimeString())
}


exibirData()
exibirHora()
apresentar() 
function apresentar():void {
    console.log("Bem-vindo ao curso de TypeScript!")
}

function exibirData():void {
    console.log(new Date().toLocaleDateString())
}

function exibirHora():void {
    console.log(new Date().toLocaleTimeString())
}

exibirHora()
exibirData()
apresentar() 
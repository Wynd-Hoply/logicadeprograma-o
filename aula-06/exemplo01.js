let numeros = [10, 25, 37, 42, 58]

for (let i = 0; i < numeros.length; i++) {
    console.log("Índice " + (i+1) + ": " + numeros[i])    
}
//para cada vez que o indice for menor que o array "numeros"
//acrescenta 1 no indice e mostra no console:
//O número do indice + array[numero do indice atual]

for (let num of numeros)
    console.log(num) 

//para cada vez que rodar o for (valor do array of array)
//mostrar no console: valor do array

numeros.forEach((num, i) => {
    console.log(`Posição ${i+1}: ${num}`)
})

//para cada num (valor do array) e posição do indice
//mostrar no console posição do indice: valor do array
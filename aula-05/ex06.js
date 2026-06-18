let i = 1
let calc 

while (i <= 20) {
    calc = i % 2
    if (calc === 0) {
        console.log(`${i} é par`)  
    } else {
        console.log(`${i} é impar`)
    }
    i = i + 1
}
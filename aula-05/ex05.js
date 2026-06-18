let i = 1
let calc 

while (i <= 200) {
    calc = i % 4
    if (calc === 0) {
        console.log(`${i} é dívisivel por 4`)  
    } 
    i = i + 1
}
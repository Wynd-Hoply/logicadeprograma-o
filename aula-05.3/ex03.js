let i 
let calc

for (i = 1; i <= 50; i++) {
   calc = i % 5
    if (calc === 0) {
        console.log(`${i} é divisível por 5`)
   } 
}
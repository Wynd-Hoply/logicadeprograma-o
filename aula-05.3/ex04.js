let n = 50
let mult, mult2

for (let i = 1; i <= n; i++) {
    mult = i % 3
    mult2 = i % 5
    if (mult === 0 && mult2 === 0) {
        console.log(`${i} é multiplo de 3 e 5`)
    }
}

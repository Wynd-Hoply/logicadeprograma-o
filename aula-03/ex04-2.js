let a = 30
let b = 20
let c = 10

let p1
let p2
let p3


//primeiro
if (a < b && a < c) {
    p1 = a
}
if (b < a && b < c) {
    p1 = b
}
if (c < a && c < b) {
    p1 = c
}

//segundo
if (a > b && a < c) {
    p2 = a
}
if (b > a && b < c) {
    p2 = b
}
if (c > a && c < b) {
    p2 = c
}
//segundo pt2
if (a < b && a > c) {
    p2 = a
}
if (b < a && b > c) {
    p2 = b
}
if (c < a && c > b) {
    p2 = c
}

//terceiro
if (a > b && a > c) {
    p3 = a
}
if (b > a && b > c) {
    p3 = b
}
if (c > a && c > b) {
    p3 = c
}

console.log(`ordem crescente de ${a}, ${b} e ${c}`)
console.log(`o primeiro é ${p1}`)
console.log(`o segundo é ${p2}`)
console.log(`o terceiro é ${p3}`)
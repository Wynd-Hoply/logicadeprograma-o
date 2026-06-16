let numA = 30
let numB = 20
let numC = 10

let pri = Math.max(numA, numB, numC)
let ter = Math.min(numA, numB, numC)
let seg = (numA + numB + numC) - pri - ter

console.log(pri, seg, ter)

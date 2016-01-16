'use strict'

var R = require("ramda");

let out = R.map(n => n * 3, [1, 2, 3])

console.log(out)


let mult3 = n => n * 3
let f = R.map(mult3)
let out2 = f([1, 2, 3])

console.log(out2)

let mult100 = n => n * 100
let g = R.map(mult100)
R.compose(console.log, g, f)([1,2,3])


R.compose(console.log, R.map(R.multiply(100)), R.map(R.multiply(3)))([1,2,3])

R.compose(console.log, R.map(R.compose(R.multiply(100), R.multiply(3))))([1,2,3])
//FIND
const studentNames = ["john", "john","chioma","joy"]
let found = studentNames.find((name) => {
    return name === "john"
})
console.log(found)

//reduce
let cartprices = [1500, 800, 2200,450, 1000]
let totalprices = cartprices.reduce(function(acc,currentprice){
    return acc + currentprice
},0)
console.log(totalprices)
let grandtotal = cartprices.reduce((accumulator,price) => {
    return accumulator + price
},10000)
console.log(grandtotal)

//shift,unshift,push,pop
let newList = cartprices.push(7000)
console.log(cartprices)
let shiftList = cartprices.shift()
console.log(cartprices)
let unshiftList = cartprices.unshift("john's money")
console.log(cartprices)
let popList = cartprices.pop()
console.log(cartprices)
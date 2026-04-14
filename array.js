//Arrays are of two methods f array ; higher order array method and normal array method

let shoppingList = ["apple", "mango", "beans", "rice"]
console.log(shoppingList[2])
console.log(shoppingList.length)

//higher order array method:forEach method
let names = ["esther" , "john" , "doe" , "jANE" , "smith"]
names.forEach (function(name){
    console.log ("I love "  +  name)
    console.log("TECH_CRUSH_2026_COHORT_6 " + name)
})
let fruits = ["apple" , "banana" , "orange" , "grape" , "mango"]
fruits.forEach(function(fruit){
    console.log("I eat " + fruit)
})

 fruits.forEach(fruit => {
    console.log("I love " + fruit)})


let mapfruits = fruits.map(fruit => "I love " + fruit)
console.log(mapfruits)

fruits.forEach(fruit => {
    console.log("give me " + fruit)
})
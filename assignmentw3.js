//forEach
const numbers = [2, 4, 6, 8, 10]
numbers.forEach(function(number){
    console.log(number *=2)
})

//question2

const names = ["Esther", "John", "Ada", "Mike"]
names.forEach(function(name){
    console.log("Hello " + name + "!")
})

//SECTIONB
//question3
const Bnumbers = [1,2,3,4,5]
let squarenumbers = Bnumbers.map((Bnumber) => Bnumber * Bnumber)
console.log(squarenumbers)

//question4
const prices = [100,200,300]
let discountPrice = prices.map((price ) => price - (10/100  *  price))
console.log(discountPrice)

//filters
//question 5
const Cnumbers = [5,12,8,20,3]
let greaternumber = Cnumbers.filter((Cnumber) => {
    return Cnumber > 10
})
console.log(greaternumber)

//question6

const ages = [ 15,22, 17,30,18]
let adults = ages.filter((age) => {
    return age >= 18})
    console.log(adults)

    //question7
    const Dnumbers = [10,15,20,25,30]
    let above20s = Dnumbers.filter((Dnumber) =>{
        return Dnumber > 20
    })
    console.log(above20s)

   let double = above20s.map((above20) => above20 *=2)
   console.log(double)
// return a new array of the numbers multiplied by 2
const numbers = [1,2,3,4,5]
let mapnumbers = numbers.map((number) => (number *=2))
console.log (mapnumbers)

//return scores greater than or equal to 300
const scores =[250,300,350,200,400,180,160]
let greaterscores = scores.filter((score) => {
return score >= 300
})
console.log(greaterscores)

//return total value
const sum =[2000,3000,400,100,600]
let Total = sum.reduce(function(accumulator,number){
    return accumulator + number
},0)
console.log(Total)

//add green to the end of the array and remove red from the array
const colors = ["blue","yellow","red"]
let addgreen = colors.push("green")
console.log(addgreen)
console.log (colors)
let removered = colors.filter(col => col !== "red")
console.log(removered)
 
let removered2 = colors.splice(2,1)
console.log(removered2)
console.log(colors)
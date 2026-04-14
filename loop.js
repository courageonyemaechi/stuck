//for loop
//for(start ; Condition; update){code to run}
//example
//for(let i=0; i<5; i++){
   // console.log(i)//
//}//
//for(let i=0; i<=5; i++){
  //  console.log(i)
//}//
for(let i=0; i<=100; i++){
    console.log(i)
}
for(let greeting=0;greeting <3; greeting++){
    console.log("hello world")
}
for(let x=2; x <26; x *=2){
    console.log(x)
}
let arrayofNames = ["esther" ,"john" , "jude","mercy"]
for (let names = 0; names < arrayofNames.length ; names++){
    console.log(arrayofNames[names])
}

let tries = 0
while(tries < 3){
    console.log(tries + 1)
    tries ++
}
let count = 3
while(count > 0){
    console.log(count)
    count --
}
let meat = 10
while (meat >=1){console.log(meat)
    meat --
}
console.log("done")

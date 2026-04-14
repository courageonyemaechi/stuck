// iterating over objects or looping over object.there are four methods



const user = {
   name : "esther",
   password : 1234,
   isfemale : "true",
   age : 15,
   city : "Asaba"
};
//for ...in : loops the object and targets the keys
for(let key in user){
    console.log("these are the keys: " + key)//returns name of the keys
   console.log("these are the values :"  + user[key])//returns values of the keys
}
//for...of : targets the 
//object. targets both keys and values and returns an array
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))


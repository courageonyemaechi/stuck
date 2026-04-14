let student = {
    name : "amaka jane",
    age : 16,
    department : "physics",
    isenrolled : true
};
console.log(student.name)
console.log(student["age"])

//destructuring- a short cut for pulling out values from an object and storing them in a separate variable just like tearing down or slice and substring in arrays
let employee ={
    name : "Tunde Balogun",
    role : "virtual assistant",
    salary : 45000,
    city : "Lagos"
};

let newName = employee.name
let newRole = employee.role
 console.log(newName, newRole)
 console.log(newName + "," + newRole)

 //easier way
 const {name, role, salary, city} = employee
 console.log(name)
 console.log(salary)
 console.log(role)
 console.log(city)

 //renaming keys 
 let courses = {
    csc401 : "Data structures",
    csc402 : "Algorithms",
     csc403 : "Operating system",
      csc404 : "Database systems"
 };
 let {csc401 : csc400} = courses
 console.log(courses)
 console.log(csc400)
 //console.log(csc401)//this will return an error bkos csc401 has been changed to csc400 even though it doesnt change name in the object

 //spread and rest operators
 //both spread and rest operators use three dots but they do opposite things

 //spread operator opens up an object and spreads its items. It merges properties from two or more objects together
 let profile = { 
    name: "Ada",
    age : 22
};  
let updatedProfile = {
...profile,
city : "Abuja"
};
console.log(updatedProfile)
//rest operator : it collects the remaining items into a new  object
const {nombre,...rest} = {
    nombre : "Emeka",
    age : 25, 
    city : "Lagos"
};
console.log(nombre)

// iterating over objects




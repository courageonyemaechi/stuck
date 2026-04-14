//substring and slice
const str = "Nigeria is awesome"
let substringNigeria = str.substring(0,7)
console.log(substringNigeria)

let sliceAwesome = str.slice(11,18)
console.log(sliceAwesome)


const names = "John Jane Doe"
let splitNames = names.split(",")
console.log (splitNames)
 
let joinspace = splitNames.join(" ")
console.log(joinspace)

const path = "/user/home/docs"
let splitPath = path.split("/")
console.log(splitPath)
let splithome = splitPath.slice(2,3)
let home = splithome.reverse().join("")
console.log(home)


//mix
const email= "user@example.com"
let username = email.split("@")
let splituser = username.slice(0,1)
console.log (splituser)
let user = splituser.reverse().join("")
console.log(user)

let endsWithdomain = email.endsWith(".com")
console.log(endsWithdomain)
let replace = email.replace("@", "At")
console.log(replace)
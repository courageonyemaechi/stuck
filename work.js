const msg = " Hello WORLD!  "
let trimmedMsg = msg.trim()
console.log(trimmedMsg)

let starts = trimmedMsg.startsWith("Hello")
let ends = trimmedMsg.endsWith("WORLD!")
console.log(starts)
console.log(ends)

let uppercase = trimmedMsg.toUpperCase()
let lowercase = trimmedMsg.toLowerCase()
console.log(uppercase)
console.log(lowercase)

let position = trimmedMsg.indexOf("WORLD")
console.log(position)

let replacement = trimmedMsg.replace("WORLD", "Nigeria")
console.log(replacement)

let repAll = trimmedMsg.replaceAll("L","l")
console.log(repAll)

let character = trimmedMsg.substring(3,8)
 console.log(character)
//function functionname(){
//code to be executed}
// function is a block of codes that
//  carries out a particular action
//static function: the values never change bkos the variables are declared inside
function add(){
    let a = 4
    let b = 3
    return a + b
}
console.log(add()) 

//dynamic function: vales can change bkos they are declared ouside the function
function add (a,b){
    return a+b
}
console.log(add(7,8))

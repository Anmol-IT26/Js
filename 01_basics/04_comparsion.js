console.log("2"> 1)
console.log("02">1)

console.log(null > 0)//false 
console.log(null == 0)//false
console.log(null >= 0)//false
/*Reason 
equality check and comparsion are work diffrently
comparsion convert null into number treated as 0 
*/
console.log(undefined > 0 )//all aere false
console.log(undefinded == 0)
console.log(undefined >= 0)

// === check data type too
console.log("2" === 2)
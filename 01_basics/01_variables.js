const accountNumber = 123456
let accountEmail = "abcg@gamil.com"
var AccountCity = "delhi"
let AccountState ;

//accountNumber  = 2//not allowed
//changing of const declare variable is not allowed

accountEmail = "defg@gmail.com"
AccountCity = "Rohtak"

console.table([accountNumber,AccountCity,AccountState,accountEmail]);
/*
prefer not use var
because of issue in block scope and functional scope
**scope
Scope is a certain section/region of the program where a defined variable has it's existence and beyond that it cannot be accessed.
let and const are block scope and var is functional scope.
*/
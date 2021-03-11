

// function expression
const doSomeMaths = function(Num1, Num2, String) {
// Conditional statement
   if(String === 'multiply') {
     return Num1 * Num2;
   } else if(String === 'divide') {
     return Num1 / Num2;
   } else if(String === 'sum') {
     return Num1 + Num2;
   } else {
     return "Wrong Input";
   }
 }
console.log(doSomeMaths(5,5,'multiply'));
console.log(doSomeMaths(5,5,'divide'));
console.log(doSomeMaths(5,5,'sum'));
console.log(doSomeMaths(5,5,'baby'));

 


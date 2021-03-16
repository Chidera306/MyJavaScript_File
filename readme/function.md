#FUNCTION PARAMETERS

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters.

#FUNCTION ARGUMENTS
 The actual values that are passed into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2, and also an arguments.

**Example**

function doSomeMaths(param1, param2) {
  console.log(param1 * param2);
}

doSomeMaths(45, 2);

param1 & param2 are function parameters while 45 & 2 are function arguments.


#CONCATENATION
Concatenation means joining two strings together. And the symbol used for concatenation is a plus sign(+).

**Example**
<!--String + string-->

const name = 'Joe';

const yourName = 'Micheal';

console.log(name + yourName);

<!--Number + String -> concatenation-->

const bar = 'foo';

const baz = 5;

console.log(bar + baz);

<!--String + Boolean -> concatenation-->

const letter = 'foo';

const letter2 = 'false'; 

console.log(letter + letter2);



const val = 'Johny';

console.log('my name is ' + val);

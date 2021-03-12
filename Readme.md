#JavaScript Assignment

##Statement

A statement in javascript is an instruction or action. 

**Example 1**

 let num1 = 10 + 27;
 
**Example 2**

if (num > 0) {

  return num;

} else {

  return 0;

}

Statements perform actions and control actions but don't become a value

##JavaScript Expression

An expression is a single unit of JavaScript code that the JavaScript engine can evaluate, and return a value.
Expression is a piece of code that revolves to a value. In other words it becomes a value.

**Example 1**

Const y = 5;

Const y is an expression and 5 is a value.

**Example 2**

2 + 3 = 5;

2 + 3 is an expression that resolves to a value 5.

**Example 3** <!--Arithmetic expression-->

* 1 / 2
* i++
* i -= 2
* i * 2

**Example 4** <!--String expression-->

'A ' + 'string'

**Example 5**

const y = getAnswer();

function call `getAnswer()` is also an expression because it will return something.

**Example 6** <!--Logical expression-->

Logical expressions make use of logical operators and resolve to a boolean value:
* a && b
* a || b

##JavaScript Functions

A function is a block of code, self contained.
<!--here is a function declaration-->
function getData() {

  do something
  
}


And a function can be run any time you want by invoking it, like this:

  getData()

It can also have one or more argument:

function getData(`color`, `age`) {

  do something

}
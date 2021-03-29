#### Explain higher Order Functions with examples

##### Higher-Order Functions
Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

**Examples**

+ Array.prototype.map
+ Array.prototype.filter and 
+ Array.prototype.reduce are some of the Higher-Order functions built into the language.

```js
const arrayOfNumbers1= [1, 2, 3, 5, 12, 24, 30];

const arrayOfNumbers2 = arrayOfNumbers1.map(number => number * 2);

console.log(arrayOfNumbers2); // prints [ 2, 4, 6, 10, 24, 48, 60 ]

console.log(arrayOfNumbers1.map(number => number * 2));  // prints [ 2, 4, 6, 10, 24, 48, 60 ]
```




#### Explain the map and reduce methods with examples 

**Array.map method**
The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value from the callback function and creates a new array using those values.
The callback function passed to the map() method accepts 3 arguments: element, index, and array.

**Example**
Let’s say we have an array of numbers and we want to create a new array which contains double of each value of the first array. Let’s see how we can solve the problem with and without Higher-Order Function.

**Without Higher-order function**
```js
const arrayOfNumbers1 = [1, 2, 3, 5, 12, 24, 30];

const arrayOfNumbers2 = [];
for(let i = 0; i < arrayOfNumbers1.length; i++) {
  arrayOfNumbers2.push(arrayOfNumbers1[i] * 2);
}

console.log(arrayOfNumbers2); // prints [ 2, 4, 6, 10, 24, 48, 60 ]
```

**With Higher-order function map**
```js
const arrayOfNumbers1= [1, 2, 3, 5, 12, 24, 30];

const arrayOfNumbers2 = arrayOfNumbers1.map(number => number * 2);

console.log(arrayOfNumbers2); // prints [ 2, 4, 6, 10, 24, 48, 60 ]

console.log(arrayOfNumbers1.map(number => number * 2));  // prints [ 2, 4, 6, 10, 24, 48, 60 ]
```

**Array.reduce method**
The reduce method executes the callback function on each member of the calling array which results in a single output value. The reduce method accepts two parameters: 1) The reducer function (callback), 2) and an optional initialValue.
The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.

If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array.

If no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.

**Example**
Let’s say we have to sum an array of numbers:

With Higher-order function reduce
```js
const myArray = [5, 87, 17, 8, 49];
const sum = myArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum);  // prints 166
```






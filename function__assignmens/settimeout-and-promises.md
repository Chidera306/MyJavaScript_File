### Explain the setTimeout function with examples
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

```js
let timeoutID;

function delayTimer() {
  timeoutID = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
  alert(“Three seconds have elapsed.”);
}
```



### Explain promises with examples
A Promise is a JavaScript object that links producing code and consuming code.
"Producing code" is code that can take some time"

"Consuming code" is code that must wait for the result"
A JavaScript Promise object contains both the producing code and calls to the consuming code:

**Promise Object Properties**
A JavaScript Promise object can be:

+ Pending
+ Fulfilled
+ Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

```js
const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(2);
      } else {
        reject(new Error("I am sad"));
      }
    }, 2000);
  });
};
```

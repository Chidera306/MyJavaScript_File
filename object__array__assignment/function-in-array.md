# **Create an array with three elements: the second element should be a function, Use the function outside the array **

~~~js
const items = ['Rice',
  function(para1, para2) {
    console.log(para1 * para2);
  },
  47,
  {
    name: 'Joe',
    career: 'Teaching',
    address: '51 Ajah str'
  }
]

*Calling the function outside the array*

items[1](6,8); 
~~~

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Explain the difference between these blocks of code**

for (club of footBallClubs) {
  const objectValues = Object.values(club)
  const secondValue = objectValues[1]

  console.log(secondValue);
}

footBallClubs.forEach((club) => {
  const objectValues = object.values(club)
  const secondValue = objectValues[1]
  console.log(secondValue)
})

There is no difference between the two block of codes, both of them are returning the second value of all the  elements in an array.


# **Loop**

A loop is a sequence of instructions that is continually repeated until a certain condition is met in computer programming.


## **Types of Loop**

### **Infinite Loop**
An infinite loop is a piece of code that will keep running forever as the terminating condition is never reached.
A common infinite loop occurs when the condition of the while statement is set to true.

**Example**
~~~js
for (let index = 1; index !== 20; index += 2) {
  console.log(index);
}
~~~



### **For Loop**
We  use  the 'For'  keyword  and  we  pass  a  set  of  3  instructions:  the initialization, the condition, and the increment part.

**Example:**
~~~js
const list = ['fruit', 'pear', 'kiwi']
for (let index = 0; index < list.length; index++) {
  console.log(list[index])  //value console.log(i) 
}
~~~




### **ForEach Loop**
forEach method loops through arrays. It uses a function differently than the classic 'for loop'.

The forEach loop also passes a callback function for each element of an array.


### **Using For Each Loop to loop through an array of objects and log the second property**

~~~js
const schools = [
  {
    nameOfSchool: 'Chrisland school',
    city: 'Lekki',
    address: '18 Admiralty Way'

  },

  {
    nameOfSchool: 'Edidot college',
    city: 'Ajah',
    address: '21 Badore Rd'
  },

  {
     nameOfSchool: 'British International',
     city: 'Victoria Island',
     address: '2 Land Bridge Avenue'
  },

  {
     nameOfSchool: 'Command Secondary',
     city: 'Ikeja',
     address: '12 Mobola Way'
  }
]


schools.forEach(school => {
  console.log(school.city);
});
~~~








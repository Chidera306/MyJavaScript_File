//Objects

const user = {
    firstName: 'Vera',
    lastName: 'Johnson',
    age: 27,
    id: 1015668,
    eyeColor:'black',
    height: "5ft 7inch",
    job: 'chef',
    tribe: 'Ibibio',
    bodySize: 10,
    hairTexture: 'Silky',
    email: 'vera@dev.com',
    personalInfo: {
        gender: 'Female',
        status: 'single',
        religion: 'Christianity',
        nationality: 'Nigeria',
        address: {
            street1:'Adesanya st',
            street2:'Munir',
            city: 'Ajah',
            state: 'Lagos'
        }
    }
}

console.log(user.bodySize)

//Object
const instructorData = {
  name: "Elie",
  additionalData: {
      instructor: true,
      favoriteHobbies: ["Playing", "Tennis", "Coding"],
      moreDetails: {
          favoriteFootballTeam: 'Manchester United',
          numberOfSiblings: 3,
          favouriteFood: 'Fries',
          isYoungest: true,
          hometown: {
              city: "Jos",
              state: "Pleateu",
          },
          citiesLivedIn: ["Abuja", "Owerri", 'Lagos']
      }
  }
}

console.log(instructorData.additionalData.instructor)


//Object
  const person = {
    firstName: 'Sherley',
    lastName: 'Wilson',
    age:  '40years',
    gender: 'female',
    stature: 'petite',
    education: {
      highSchool: 'Binta',
      college: 'Stanford',
      discipline: 'Pharmacology',
      grade: 'Distinction',
      graduationYear: 2007,
      },
    family: {
    children: 4,
    married: true,
    }
  }


  //ARRAYS

 const food = [
   ['bean', 'fish', 'milk'], 
   ['rice', 'Yam', 'Pasta'], 
   ['carrot', 'cucumber', 'lettuce']
   ]

   console.log(food[2])


 const shopping = [
   ['bread', 'milk', 'cheese', 'cake'],
   ['beef', 'chicken','minced meat', 'turkey'],
   ['curtain', 'duvet','Rug']
 ]

 console.log(shopping[1]);


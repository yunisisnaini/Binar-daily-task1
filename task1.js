const person = [
  {
    "_id": "640b3d42363b010c459902de",
    "isActive": false,
    "age": 26,
    "eyeColor": "brown",
    "name": "Ladonna Lambert",
    "gender": "female",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d42345c55b4b335f2dc",
    "isActive": true,
    "age": 29,
    "eyeColor": "green",
    "name": "Banks Logan",
    "gender": "male",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d42433d88db7c532e71",
    "isActive": false,
    "age": 29,
    "eyeColor": "green",
    "name": "Gonzales Mathis",
    "gender": "male",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d429ef24c975d0085fc",
    "isActive": false,
    "age": 34,
    "eyeColor": "blue",
    "name": "Rivers Atkins",
    "gender": "male",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "640b3d4262339336025157a1",
    "isActive": false,
    "age": 32,
    "eyeColor": "brown",
    "name": "Earnestine Knight",
    "gender": "female",
    "favoriteFruit": "banana"
  }
]


// 1. print person yang suka buah apple dan warna mata nya biru
// for (let i=0;i<person.length; i++) {
//     if (person[i].favoriteFruit === "banana" && person[i].eyeColor === "green") {
//       console.log("helo")
//         console.log(person[i])
//     } else {}
// }


// 2. print berapa person yang age nya diatas 30 
// let arr = []
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 30) {
//       arr.push(person[i])
//   }
// }
// console.log(arr.length)

// 3. print person yang isActive true and  gender nya female 
for (let i=0;i<person.length; i++) {
  if (person[i].isActive === true && person[i].gender ==="female") {
      console.log(person[i])
  } else {}
}

// 4. print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue 
// for (let i=0;i<person.length; i++) {
//   if (person[i].age < 25 || person[i].age > 30 && person[i].eyeColor === "blue") {
//       console.log(person[i])
//   } else {}
// }

// 5. print person yang mengandung huruf W di name nya 
// for (let i=0;i<person.length; i++) {
//   if (person[i].name.match("w")) {
//       console.log(person[i])
//   } else {}
// }

// 6. print person isActive false dan gender nya male dan age nya diatas 25 
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 25 && person[i].isActive == false && person[i].gender == "male") {
//       console.log(person[i])
//   } else {}
// }

// 7. print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana 
// for (let i=0;i<person.length; i++) {
//   if (person[i].age < 30 || person[i].eyeColor === "brown" && person[i].favoriteFruit === "banana") {
//       console.log(person[i])
//   } else {}
// }

// 8. print person gender male 
// for (let i=0;i<person.length; i++) {
//   if (person[i].gender === "male") {
//       console.log(person[i])
//   } else {}
// }

// 9. print person eyeColor Blue 
// for (let i=0;i<person.length; i++) {
//   if (person[i].eyeColor === "blue") {
//       console.log(person[i])
//   } else {}
// }

// 10. print person age diatas 30
// for (let i=0;i<person.length; i++) {
//   if (person[i].age > 30) {
//       console.log(person[i])
//   } else {}
//  }
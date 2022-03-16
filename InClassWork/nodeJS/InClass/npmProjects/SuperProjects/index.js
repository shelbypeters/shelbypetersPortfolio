const marvel = require("marvel-characters");

const findManCharacters = arr => {
  const manCharacters = arr.filter((element) => {
    return element === "Batman"
  })
  if(manCharacters.length !== 0) return manCharacters
  else return "error - no Man characters found"
  }
  
  console.log(findManCharacters(marvel.characters))

// const findManCharacters = arr => {
//   const manCharacters = arr.filter((element) => {
//     return element === "Iron Man"
//   })
//   if(manCharacters.length !== 0) return manCharacters
//   else return "error - no Man characters found"
//   }
  
//   console.log(findManCharacters(marvel.characters))

// const findManCharacters = arr => {
// const manCharacters = arr.filter((element) => {
//   return element.slice(0,3) === "Man"
// })
// if(manCharacters.length !== 0) return manCharacters
// else return "error - no Man characters found"
// }

// console.log(findManCharacters(marvel.characters))

// Helpful methods includes(), findIndex(), find()

// const findMan = (name) => {
//   let man = [];
//   for (let index = 0; index < name.length; index++) {
//     let arr = name[index].slice(0, 3);
//     if (arr === "Man") {
//       man.push(name[index]);
//     }
//   }
//   if (man.length !== 0) {
//     return man;
//   } else {
//     return "error";
//   }
// };

// console.log(findMan(marvel.characters));

// console.log(marvel())

// console.log(marvel.characters.length)
var Log = require("log.pets");

var animals = require("animals");

// console.log(animals());

// Log.lion()

// Log.zoo(animals(),animals(),animals())

// console.log(animals.words.length)

const findG = (name) => {
      let gAnimal = [];
      for (let index = 0; index < name.length; index++) {
        let arr = name[index].slice(0);
        if (arr === "G") {
          gAnimal.push(name[index]);
        }
      }
      if (gAnimal.length !== 0) {
        return gAnimal;
      } else {
        return "error";
      }
    };

    console.log(findG(animals.words.length));

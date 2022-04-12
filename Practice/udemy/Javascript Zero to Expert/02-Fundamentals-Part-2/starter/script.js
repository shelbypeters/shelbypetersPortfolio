// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Shelby');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991)
// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991)

// console.log(age1, age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));

// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5))

// Test 1
let team1 = calcAverage(44, 23, 71);
let team2 = calcAverage(65, 54, 49);
console.log(team1, team2)

const checkWinner = function(avgTeam1, avgTeam2) {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log(`Dolphins win (${avgTeam1} vs. ${avgTeam2})`)
    } else if (avgTeam2 >= 2 * avgTeam1){
        console.log(`Koalas win (${avgTeam2} vs. ${avgTeam1})`)
    } else {
        console.log('No team wins...')
    }
}

checkWinner(team1, team2)

checkWinner(576, 111)

team1 = calcAverage(85, 54, 41);
team2 = calcAverage(23, 34, 27);
console.log(team1, team2)
checkWinner(team1, team2)
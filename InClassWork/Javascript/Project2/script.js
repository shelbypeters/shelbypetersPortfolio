var name1 = prompt("Tell me your name.");
var number1 = Number(prompt("Give me a number."));
var number2 = Number(prompt("Give me another number."));
var sum = number1 + number2;

function day(name1, numbers) {
    document.write("You are going to have a wonderful day, " + name1 + ".");
    numbers();
} 

function sumNum(number1, number2) {
    document.write(" By the way, the sum of your numbers is " + sum + ".");
}

day(name1, sumNum);    


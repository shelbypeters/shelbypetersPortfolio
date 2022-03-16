var number1 = Number(prompt("Give a number."));
var number2 = Number(prompt("Give another number."));
var number3 = Number(prompt("Give a number again."));
var nums = [number1, number2, number3];
var sum = 0;

for(var i = 0; i < nums.length; i++) {
    sum = sum + nums[i]; 
}

document.write("The sum of all of your numbers is " + sum + ".");


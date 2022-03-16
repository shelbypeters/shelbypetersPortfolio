// var paidMember = false;
// var rewardPoints = 49;

// if(paidMember === true) {
//     document.write("Welcome to our club!");
// } else if (rewardPoints >= 50) {
//     document.write("You're not a member. Would you like to redeem your points?");
// } else {
//     document.write("Sorry, you do not have access.");
// }

// var choice = prompt("You have two choices, coffer or tea. Which would you like?");

// if(choice === "coffee") {
//     document.write("Great choice. Would you like cream or sugar?");   
// } else if (choice === "tea") {
//     document.write("Excellent choice. Would you like milk and sugar?"); 
// } else {
//     document.write("Sorry, I don't know what that is.");
// }

// var message = "";
// var i = 1

// while (i<=10) {
//     message = "<p>I am number " + i + "!</p>";
//     document.write(message);
//     i++;
// }

// for(var i=0; i<10; i++) {
//     console.log(i);
// }

// for(var i=20; i>=5; i--) {
//     document.write("<p>The number is " + i + "</p>")
// }

// function emotion(feelings) {
//     console.log(feelings);
// }

// var currentFeeling = emotion("really love");

// function theNumber(number) {
//     console.log(number);
// }

// var times = theNumber(3);

// function restaurants(place1) {
//     console.log("I " + currentFeeling + " eating at " + place1 + " and I've been there " + times + " times.");
// }

// restaurants("In-N-Out");

// var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

// document.querySelector("div").addEventListener("click", function() {
//     document.querySelector("div").style.backgroundColor = randomColor;
//     document.querySelector("div").textContent = "I haven't seen this before.";
// });

// document.querySelector("img").addEventListener("mouseenter", function() {
//         document.querySelector("img").src = "assets/milkshake.jpg";
//     });

document.getElementById("userText").addEventListener("keyup", function() {
    var textLength = document.getElementById("userText").value.length;
    var message = document.getElementById("theMessage");
    var counter = (10 - (textLength));
    message.textContent = counter + " characters left";

    if (counter <= 3) {
        message.style.color = "red";
    } else {
        message.style.color = "black";
    }
});
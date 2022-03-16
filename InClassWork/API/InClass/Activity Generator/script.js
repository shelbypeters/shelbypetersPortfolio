let baseURL = `https://www.boredapi.com/api/activity`
// Grab our btn we want to listen for

let randomBTN = document.getElementById("random");
// Where we will display the results

let results = document.getElementById("results");
// Add event listener to our button

randomBTN.addEventListener("click", ()=> {
//When button is clicked we make a call to our api endpoint
fetch(baseURL) // Endpoint we are making request to
.then(response => response.json()) //take the response and parse
.then(data => {
console.log(data)
 let activity = data.activity
 let type = data.type
 let price = data.price

 results.innerHTML = `${activity} <br> ${type} <br> ${price}`
}) // then do something with the data

.catch(error => console.log("Something went wrong getting data...", error)) //If anything goes wrong catch the error
})

//Grab our activity button
let activityBTN = document.getElementById('activity');
activityBTN.addEventListener("click", ()=> {
  //grab the value of the input that is selected on "click"
  let type = document.querySelector('input[name="type"]:checked').value;
  //console.log(type)
  let endpoint = `${baseURL}?type=${type}`
 //console.log(endpoint)
fetch(endpoint)
.then(response => response.json())
.then(data => {
console.log(data)
 let activity = data.activity
 let type = data.type
 let price = data.price
 results.innerHTML = `${activity} <br> ${type} <br> ${price}`
})
.catch(error => {
  console.log(error)
})
})
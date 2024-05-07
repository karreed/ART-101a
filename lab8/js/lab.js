// index.js - Purpose of the program is to make Anon Functions and Callbacks
// Author: Jonathan Au
// Date: 6 May 2024

// Constants
numArray = [2, 5, 6, 8];

// Functions
function isOdd(x) {
  return x % 2 != 0;
}

console.log("is 5 odd? ", isOdd(5));
console.log("is 8 odd? ", isOdd(8));

console.log("array: ", numArray);

var results = numArray.map(isOdd);

console.log("Results of odd numbers in array: ", results);

var results = numArray.map(function(x) {
  return x % 2 == 0;
})

console.log("Results of even numbers in array: ", results);

//map results data
var mapResults = "map results here: <br />" +"array: " + numArray + "<br /> oddness of array: " + numArray.map(isOdd) + "<br /> evenness of array: " + results;

//Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

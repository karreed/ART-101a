// index.js - The purpose of the lab is to practice using and accesing libraries and jQuery
// Author: Jonathan Au
// Date: 7 May 2024

// Constants

// Functions

// add button to challenge & other sections
$("#challenge").append("<button id='buttonChallenge'>Make Special</button>");

$("#problems").append("<button id='button-problems'>Make Special</button>");

$("#reflection").append("<button id='button-reflection'>Make Special</button>");

$("#results").append("<button id='button-results'>Make Special</button>");

// $(".minor-section").append("<button class='button-special'>Make Special</button>");

// $(".button-special").click(function(){
//   $(this).parent().toggleClass("special");
// });

// add a click listener to the challenge button
$("#buttonChallenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

$("#button-reflection").click(function(){
  $("#reflection").toggleClass("special");
});

$("#button-results").click(function(){
  $("#results").toggleClass("special");
});

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

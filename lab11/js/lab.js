// index.js - The purpose of this lab is to create a JavaScript/jQuery script that gets a value from an input field and outputs a modified version.
// Author: Jonathan Au
// Date: 19 May 2024

// Constants

// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// $("#submit").click(function(){
//   const userName = $("#user-name").val();
//   userNameSorted = sortString(userName);
//   $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
// });

// $("#submit2").click(function(){
//   const userName2 = $("#user-name2").val();
//   userNameSorted = sortString(userName2);
//   $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
// });

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

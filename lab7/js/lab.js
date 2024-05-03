// index.js - Purpose of the Program is to create a function 
// Author: Jonathan Au
// Date: 12 May 2024

// Constants

// Functions
function yourName() {
  var userName = window.prompt("Enter your name: ");
  return userName.split('').sort().join('');
}

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("Your sorted name: ", yourName(), "</br>");
}

// let's get this party started
main();

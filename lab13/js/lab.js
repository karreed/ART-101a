// index.js - The purpose of the lab is to write a script that uses loops to display common multipliers for numbers. 
// Author: Jonathan Au
// Date: 26 May 2024

// Constants

// Functions

function fizzBuzzBoom() {
  for (var num = 1; num<=200; num++) {
    var outputStr = "";
    if (num % 3 == 0) {
      outputStr += "Fizz";
    }
    if (num % 5 == 0) {
      outputStr += "Buzz";
    }
    if (num % 7 == 0) {
      outputStr += "Boom";
    }
    if (outputStr == "") {
      $("#output").append("<p>" + num + "</p>");
    } else {
      $("#output").append("<p>" + outputStr + "</p>");
    }
  }
}


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

fizzBuzzBoom();

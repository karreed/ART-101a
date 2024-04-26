// index.js - Program to create object and arrays
// Author: Jonathan Au
// Date: 25 April 2024

// Constants

//array for different types of transport
const myTransport = ['bus', 'car', 'walk', 'bike', 'plane', 'teleporter'];

//object of my ride (not actually)
var myMainRide = {
  make: "Toyota",
  model: "Supra",
  color: "Black",
  year: 2020,
  age: function() {
      return 2024 - this.year;
  }
}
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("I get around by: " + myTransport + "<br>");
  document.writeln("My main ride (not actually) is: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();

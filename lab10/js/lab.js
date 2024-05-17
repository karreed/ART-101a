// index.js - Purpose of the lab is to create javascript and jQuery script that appends new elements to output div 
// Author: Jonathan Au
// Date: 16 May 2024

// Constants
let isLeft = true;

// Functions
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// $("#make-convo").click(function(){
//   const newText = generateRandomText();
//   $("#output").append('<div class="text"><p>' + newText + '</p></div>');
// });

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  if (isLeft) {
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  } else {
    var newText2 = prompt("");
    $("#output").append('<div class="text2"><p>' + newText2 + '</p></div>');
  }
  isLeft = !isLeft;
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

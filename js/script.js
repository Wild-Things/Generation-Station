// Assignment Code
// Write password to the #password input
var array_of_functions = [];

var generateBtn = document.querySelector("#generate");

var length = prompt("How many characters would you like your password to be?");
  if (length < 8) {
  alert("Minimum length is 8");
} else if (length > 128) {
  alert("Maxmimum length is 128");
} else if (isNaN(length)===true) {
  alert("Unit must be a number")
} 


var upper = confirm("Will this contain lower case letters?")
var lower = confirm("Will this contain upper case letters?")
var number = confirm("Will this contain numbers?")
var symbol = confirm("Will this contain special characters?")

while (upper === false &&
  lower === false &&
  number === false &&
  symbol === false) 
  {
  alert("You must pick at least one option.")
  upper = confirm("Will this contain lower case letters?")
  lower = confirm("Will this contain upper case letters?")
  number = confirm("Will this contain numbers?")
  symbol = confirm("Will this contain special characters?")
  }


function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random()*15)+33);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function generatePassword() {
  var password = "";

  if (upper === true){
    array_of_functions.push(getRandomUpper())
    password = password +  getRandomUpper();
  }
  if (lower === true){
    array_of_functions.push(getRandomLower())
    password = password + getRandomLower();
  }
  if (symbol === true){
    array_of_functions.push(getRandomSymbol())
    password = password + getRandomSymbol();
  }
  if (number === true){
    array_of_functions.push(getRandomNumber())
    password = password + getRandomNumber();
  }
  
  // at tis point we have guaranteed one character from ecvery category choosen by the user
  // now we must add th reemaining characters by soomehhow randmmly choosing each one
  // at thhis point, we hve an array oof functions that generate random characters 
  // only iwthin the categoories set by the user
  
  
  // write the line of code that gets a random character using the array of functions
  // try this 3 times and see that it works
  // THEN figure out how to do this a dynamic number of timmes
  // hint hint it's the reaammining nummber of characters you need to fill
  // hint hint somoe sort of for loop\
  
  
  // I have an x long password already. For the remainder of the user input length,
  // I need to cycle from user.input to password.length until password.length = user.input

  if (password.length < length) {
    for (var i=password.length; i < length; i++) {
      password += array_of_functions[Math.floor(Math.random()*array_of_functions.length)]
      
    }
  }
  
  
  {
    return password
  }
 

}

function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Reference array of characters to build/ generate a password depending on the length selected.


array_of_functions[Math.floor(Math.random()*4)]


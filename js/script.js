// Assignment Code
// Write password to the #password input
var array_of_functions = [getRandomSymbol(), getRandomUpper(), getRandomLower(), getRandomSymbol()];

console.log(array_of_functions);

var a = false
do {
  var length = prompt("How many characters would you like your password to be?");
  if (length < 8) {
    alert("Minimu
  m length is 8");
  } else if (length > 128) {
    alert("Maxmimum length is 128");
  } else {
    a = true;
  }
}
while (a === false);

var upper = confirm("Will this contain lower case letters?")
var lower = confirm("Will this contain upper case letters?")
var number = confirm("Will this contain numbers?")
var special = confirm("Will this contain special characters?")


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
  for (var i=0; i <= length-1; i++) {
  
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

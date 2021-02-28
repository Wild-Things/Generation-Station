// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ">", "?", ",", ".", "/"];

// Write password to the #password input
// for (var i=0; i < charSet.length; i++) {
//   console.log(charSet[i])
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(charSet.length));

for (var i=0; i > document.querySelector("#inputValue"); i++) {
  console.log(charSet)
}


function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Reference array of characters to build/ generate a password depending on the length selected.

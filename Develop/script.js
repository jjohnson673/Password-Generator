// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")
var passwordLength = parseInt(userInput)


if (isNaN(passwordLength)) {
  window.alert("Please make sure your password contains a number")
return
  }

  if (passwordLength <8 || passwordLength > 128){
    window.alert("Password length must be between 8 and 128 characters")  
  }

var userWantsUppercase = window.confirm("Would you like to include uppercase in your password? Press 'Okay' for YES or 'Cancel' for NO")
var userWantsLowercase = window.confirm("Would you like to include lowercase characters in your password? Press 'Okay' for YES or 'Cancel' for NO")
var userWantsNumbers = window.confirm("Would you like to include numbers in your password? Press 'Okay' for YES or 'Cancel' for NO")
var userwantsSymbols = window.confirm("Would you like to include symbols in your password? Press 'Okay' for YES or 'Cancel' for NO")


var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

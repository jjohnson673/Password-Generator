// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


/* creates a random integer as a whole number what would pull a variable greater than 1 and generates a randomized list based upon that*/
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
var random = Math.random() 
 return Math.floor(min * (1 - random) + random*max)       
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {



/* until a numeric value between 8 and 128 is entered, the pop up will continue to loop until all criteria has been met before continuing on to ask about symbols/numbers/upper/lowercase characters */


  while (true) {

    var userInput = window.prompt("How many characters would you like your password to be?")
/* allows for user to cancel out of of the window prompts upon the first question asked */
    if (userInput === null) {
      return    
    }

    var passwordLength = parseInt(userInput)
    if (isNaN(passwordLength)) {
      window.alert("Please make sure you enter in a numeric value for desired password length")
    } else if (passwordLength <8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters") 
    } else {
    break
    }

  }
/*messages created to verify the information wanted in generated password*/
var userWantsUppercase = window.confirm("Would you like to include UPPERCASE characters in your password?   Press 'OK' for YES or 'Cancel' for NO")
var userWantsLowercase = window.confirm("Would you like to include lowercase characters in your password?")
var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")

/*various lists which dictate what letters/numbers/symbols can be used for each TRUE/FALSE statement*/
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

/*add in a 'cart' to hold the TRUE items */
var variationsCart = []

/* If statements when each segment is determined as TRUE what list from the cart gets pushed */
if (userWantsUppercase === true) {
  variationsCart.push (uppercaseList)
}

if (userWantsLowercase === true) {
  variationsCart.push (lowercaseList)
}

if (userWantsNumbers === true) {
  variationsCart.push (numbersList)
}

if (userWantsSymbols === true) {
  variationsCart.push (symbolList)
}

if (variationsCart.length === 0) {
  variationsCart.push(uppercaseList)
}

/* since the password is supposed to be randomized, this allows for the lists to pull a random character from the variationsCart */
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(variationsCart)
  var randomCharacter = getRandomItem(randomList)
  generatedPassword += randomCharacter
}

/* for the random numbers that were generated previously, would now be returned to where it is called */
  return generatedPassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

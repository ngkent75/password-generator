// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Prompt for user to choose lenth of password, assigned to variable passLenth
  var passLength = prompt("How many characters? Please pick between 8 and 128.")
  // Makes sure the user only picks between 8 and 128 characters
  if (passLength >= 8 && passLength <= 128) {
    
    // variables to determine inclusion of each character
    var lowLetterInc = confirm("Include lowercase letters?");
    var upLetterInc = confirm("Include uppercase letters?");
    var numberInc = confirm("Include numbers?");
    var specialInc = confirm("Include special characters?");

    // string of alphabet
    var letString = "abcdefghijklmnopqrstuvwxyz";
    // splits string of alphabet into an array
    var lowLetters = "abcdefghijklmnopqrstuvwxyz".split("");

    // Uppercase alphabet
    var upString = letString.toUpperCase();
    var upLetters = upString.split("");

    // string of numbers
    var numString = "0123456789";
    // splits string of numbers into an array
    var numbers = numString.split("");

    // array for special characters
    var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

    // Empty array for total options for generator to choose from.
    var options = [""]

    // Concats characters based on user's choices
    if (lowLetterInc) {
      var options = options.concat(lowLetters);
    }
    if (upLetterInc) {
      var options = options.concat(upLetters);
    }
    if (numberInc) {
      var options = options.concat(numbers);
    }
    if (specialInc) {
      var options = options.concat(special);
    }

    // empty array where password will generate
    var pass = [];
    // Assigns passL to passLenth so that the value assigned earlier can be used in the while loop without changing the variable.
    passL = passLength;
    // runs password generator until it includes all character types, ensuring at least one of each shows up, as long as the character is selected to be included in the password
    while (((!pass.some(r => lowLetters.includes(r))) && (lowLetterInc)) ||
      ((!pass.some(r => upLetters.includes(r))) && (upLetterInc)) ||
      ((!pass.some(r => numbers.includes(r))) && (numberInc)) ||
      ((!pass.some(r => special.includes(r))) && (specialInc))) {
      // clears password to generate again
      var pass = [];
      // resets passL back to passLenth
      passL = passLength;
      // fills in characters into password
      while (passL >= 1) {
        pass.push(options[Math.floor(Math.random() * options.length)]);
        passL--;
      }
    }

    // turns pass array into a string so it looks like a proper password
    password = pass.join("");

  }
  // When the user tries to select a password length that is not between 8 and 128, or is not a number.
  else {

    alert ("Please pick between 8 and 128.")
    generatePassword()
  }

}

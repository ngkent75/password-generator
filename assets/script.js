const generatePassword = () => {
  // array of lowercase alphabet called lowLetters
  const letString = "abcdefghijklmnopqrstuvwxyz";
  const lowLetters = "abcdefghijklmnopqrstuvwxyz".split("");

  // array of uppercase alphabet called upLetters
  const upString = letString.toUpperCase();
  const upLetters = upString.split("");

  // array of numbers called numbers
  const numString = "0123456789";
  const numbers = numString.split("");

  // array for special characters called special
  const special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

  // Empty array for total options where all character options chosen will be pushed for generator to choose from when making password.
  let options = [];

  // Identifies which options have been checked and assigns them to variables
  const lowLetterInc = document.getElementById('lowercase').checked
  const upLetterInc = document.getElementById('uppercase').checked
  const numberInc = document.getElementById('numbers').checked
  const specialInc = document.getElementById('special').checked

  // checks the length of password based off of input selected
  const passLength = document.getElementById('quantity').value

  // Concats characters based on user's choices
  if (lowLetterInc) {
    options = options.concat(lowLetters);
  };
  if (upLetterInc) {
    options = options.concat(upLetters);
  };
  if (numberInc) {
    options = options.concat(numbers);
  };
  if (specialInc) {
    options = options.concat(special);
  };

  // empty array where password will generate
  let pass = [];

  // the password generator
  // for loop that randomly pushes characters from the options array, until it reaches the desired length
  for (let i = 0; i < passLength; i++) {
    pass.push(options[Math.floor(Math.random() * options.length)]);
  };

  // if all desired characters aren't included, rerun generator
  if (((!pass.some(r => lowLetters.includes(r))) && (lowLetterInc)) ||
    ((!pass.some(r => upLetters.includes(r))) && (upLetterInc)) ||
    ((!pass.some(r => numbers.includes(r))) && (numberInc)) ||
    ((!pass.some(r => special.includes(r))) && (specialInc))) {

    generatePassword();
    
    return;
  }

  // joins the array with the password values so that it's a string of the password
  password = pass.join("");

};

// selects the generate button
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {

  // function that generates the password
  generatePassword();

  // displays password
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  return;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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

  // Empty array for total options for generator to choose from that values will be pushed into.
  let options = []

  // Identifies values of checked options and assignes them to variables
  const lowLetterInc = document.getElementById('lowercase').checked
  const upLetterInc = document.getElementById('uppercase').checked
  const numberInc = document.getElementById('numbers').checked
  const specialInc = document.getElementById('special').checked

  // checks the length of password passed off of input selected
  const passLength = document.getElementById('quantity').value

  // Concats characters based on user's choices
  if (lowLetterInc) {
    options = options.concat(lowLetters);
  }
  if (upLetterInc) {
    options = options.concat(upLetters);
  }
  if (numberInc) {
    options = options.concat(numbers);
  }
  if (specialInc) {
    options = options.concat(special);
  }

  // empty array where password will generate
  let pass = [];

  for (let i = 0; i < passLength; i++) {
    pass.push(options[Math.floor(Math.random() * options.length)]);
  };


  // runs password generator until it includes all character types, ensuring at least one of each shows up, as long as the character is selected to be included in the password
  if (((!pass.some(r => lowLetters.includes(r))) && (lowLetterInc)) ||
    ((!pass.some(r => upLetters.includes(r))) && (upLetterInc)) ||
    ((!pass.some(r => numbers.includes(r))) && (numberInc)) ||
    ((!pass.some(r => special.includes(r))) && (specialInc))) {

    console.log(`${pass} failed`);
    generatePassword();
    
    return;
  }

  console.log(pass);

  // turns pass array into a string so it looks like a proper password
  password = pass.join("");

};

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  generatePassword();
  // console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
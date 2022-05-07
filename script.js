// Assignment Code
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numericValue = "0123456789";
var specialChar = "!@#$%^&*()_><%";
var passwordText = document.getElementById('password');
var generateBtn = document.querySelector("#generate");
var password = '';
var temp = '';

// Write password to the #password input
function writePassword() {
  var len = prompt("How long would you like your password to be between 8 and 128 characters?");

// Prompts Error message for password being too short or too long. 
  if (len<8 || len>128 || isNaN(len)) {
    alert('Length is not within range.');
    return writePassword();
  };

//Confirms user wants to include upper case letters.
  var upperCase = confirm("Would you like for your password to include uppercase letters? Click OK for yes, cancel for no.");

  if(upperCase) {
    temp += upperCaseLetters;
  };
//Confirms user wants to include lower case letters.
  var lowerCase = confirm("Would you like for your password to include lower case letters? Click OK for yes, cancel for no.");

  if(lowerCase) {
    temp += lowerCaseLetters;
  };
//Confirms user wants to include numbers. 
  var numericValueQuestion = confirm("Would you like your password to contain numbers? Click OK for yes, cancel for no.");

  if(numericValueQuestion) {
    temp += numericValue;
  };
//Confirms user wants to include special characters. 
  var specialCharQuestion = confirm("would you like for your password to include special characters? Click OK for yes, cancel for no.");

  if(specialCharQuestion) {
    temp += specialChar;
  };
//Generates user specifications at random. 
  for (let i = 0; i < len; i++) {
    password += temp[Math.floor(Math.random() * temp.length)]
  }
  
  console.log(temp);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

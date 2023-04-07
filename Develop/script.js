// Assignment Code
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericCharacters = '0123456789';
var specialCharacters = '!@#$%^&*()';
var base = [];
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How many letter do you want in your password")
  console.log(passwordLength);
  var lowercaseConfirm = confirm("Do you want lowercase letters in your password")
  console.log(lowercaseConfirm);
  var uppercaseConfirm = confirm("Do you want uppercase letters in your password")
  console.log(uppercaseConfirm);
  var numericConfirm = confirm("Do you want numeric values in your password")
  console.log(numericConfirm);
  var specialcharactersConfirm = confirm("Do you want special characters in your password")
  console.log(specialcharactersConfirm);


  if(passwordLength > 128 || passwordLength < 8){
    console.log('Must be at least 8 letters long or less than 128 letters');
  } else { 
    base.push(passwordLength);
  }
  if(lowercaseConfirm = false){
    console.log('Password will not include lowercase letters')
  } else {
    base.push(lowerCase);
  }
  if(uppercaseConfirm = false){
    console.log('Password will not include uppercase letters')
  } else {
    base.push(upperCase);
  }
  if(numericConfirm = false){
    console.log('Password will not include numeric characters')
  } else {
    base.push(numericCharacters);
  }
  if(specialcharactersConfirm = false){
    console.log('Password will not incldue special characters')
  } else {
    base.push(specialCharacters);
  }

  return generatePassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   // for (var i = 0; i < passwordLength; i++) {
     // var generatePassword = Math.floor(Math.random() *(upperCase.length + lowerCase.length));}

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
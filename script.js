// Assignment Code
var lowercaseConfirm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseConfirm = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericConfirm = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharactersConfirm = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var password = ""
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
    console.log('Password will not include lowercase letters');
  } else {
    base.push(lowerCase);
  }
  if(uppercaseConfirm = false){
    console.log('Password will not include uppercase letters');
  } else {
    base.push(upperCase);
  }
  if(numericConfirm = false){
    console.log('Password will not include numeric characters');
  } else {
    base.push(numericCharacters);
  }
  if(specialcharactersConfirm = false){
    console.log('Password will not incldue special characters');
  } else {
    base.push(specialCharacters);
  }
  return generatePassword;
}

 
    
    
//event listener for password 
 generateBtn.addEventListener('click',populatePassword)
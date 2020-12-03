for (let index = 0; index < 3; index++) {
  console.log("This is loop number " + index);

}

/*
for (iterator initialization; conditional statement; iterator modifier)

// before the loop starts
> initialize index to have a value of 0
> only allow entering the loop if index < 3
> at the end of the loop, at 1 to index

// 1st loop
>   we got a value of 0 for index
>   0 < 3 --> true! we enter the loop!
>   "This is loop number 0"
>   index + 1 ---> 0 + 1 ---> index = 1

// 2nd loop
> we got a value of 1 for index
>  1 < 3 ---> true! we enter the loop!
>  "This is loop number 1"
>  1 + 1 = 2 --> index is now 2!

// 3rd loop
> we got a value of 2
> 2 < 3 --> true!
> "This is loop number 2"
>  2 + 1 = 3 --> index now 3!

// 4th loop
> we got a value of 3
>  3 < 3 --> false!
> no more entry allowed!
> exit the loop

*/

// Assignment Code
var generatePasswordBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // make prompts to get required data

  var passwordLength = window.prompt("How many characters do you want for your password?");

  var containsLowercase = window.confirm("Do you want lowercase letters?");

  var containsUppercase = window.confirm("Do you want uppercase letters?");


  // using gathered data, generate the password

  const lowerCaseLettersPool = [
    'a',
    'e',
    'i',
    'o',
    'u'
  ]

  const upperCaseLettersPool = [
    'A',
    'E',
    'I',
    'O',
    'U'
  ]


  var passwordValueHolder = "";
  var combinedPool = []

  if (containsLowercase && containsUppercase) {
    combinedPool = lowerCaseLettersPool.concat(upperCaseLettersPool)
  } else if (containsLowercase) {
    combinedPool = lowerCaseLettersPool;
  } else if (containsUppercase) {
    combinedPool = upperCaseLettersPool;
  }


  for (let index = 0; index < passwordLength; index++) {

    var newCharacter = combinedPool[Math.floor(Math.random() * combinedPool.length)]

    passwordValueHolder = passwordValueHolder + newCharacter;
  }


  // return the generated password

  return passwordValueHolder;
}


// Add event listener to generate button
generatePasswordBtn.addEventListener("click", writePassword);

// Assignment Code
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function generatePassword() {
//   var midName = document.getElementById('#midName').value;
//   var fPet = document.getElementById('#fPet').value;
  
//   console.log(midName);
//   console.log(fPet);
// }

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;

// }

function generateRandomPassword() {

  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var digit = '0123456789';
  var special = '!@#$%&*+-?/.,;_';

  var lowercaseChar = lowercase.split('');
  var uppercaseChar =uppercase.split('');
  var digitChar = digit.split('');
  var specialChar = special.split('');

  var baseArray = [];

  if (document.getElementById('type1').checked === true) {
    var ranLower =[lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]];

    for (i = 1; i < 10; i++) {
      var ranLowerCont = lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
      var ranLowerArray = [ranLower,  ranLower.push(ranLowerCont)];
      
    }
  
    console.log(ranLowerArray);
  }


  if (document.getElementById('type2').checked === true) {
    var ranUpper =[uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]];

    for (i = 1; i < 10; i++) {
      var ranUpperCont = uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
      var ranUpperArray = [ranUpper,  ranUpper.push(ranUpperCont)];
      
    }
    
    console.log(ranUpperArray);
  }

  if (document.getElementById('type3').checked === true) {
    var ranDigit =[digitChar[Math.floor(Math.random() * digitChar.length)]];

    for (i = 1; i < 10; i++) {
      var ranDigitCont = digitChar[Math.floor(Math.random() * digitChar.length)];
      var ranDigitArray = [ranDigit,  ranDigit.push(ranDigitCont)];
      
    }
    
    console.log(ranDigitArray);
  }

  if (document.getElementById('type4').checked === true) {
    var ranSpecial =[specialChar[Math.floor(Math.random() * specialChar.length)]];

    for (i = 1; i < 10; i++) {
      var ranSpecialCont = specialChar[Math.floor(Math.random() * specialChar.length)];
      var ranSpecialArray = [ranSpecial,  ranSpecial.push(ranSpecialCont)];
      
    }
    
    console.log(ranSpecialArray);
  }


  var arrayComp = baseArray.concat(ranLowerArray, ranUpperArray, ranDigitArray, ranSpecialArray);

  console.log(arrayComp);

  var arrayFlat = arrayComp.flat();

  console.log(arrayFlat);

  var arrayFlatFix = arrayFlat.filter((el => typeof el === 'string'))

  console.log(arrayFlatFix)

  var m = arrayFlatFix.length, t, i;

  while (m) {

    var i = Math.floor(Math.random() * m--);

    var t = arrayFlatFix[m];
    arrayFlatFix[m] = arrayFlatFix[i];
    arrayFlatFix[i] = t;
  }

  var password = arrayFlatFix.join('');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  return;
}

function openRandomQuery() {

  console.log('Make a Random Password')

  var formArea = document.querySelector('#formAreaRandom')

  var form = document.createElement('form');

  var lengthPrompt = document.createElement('label');
  lengthPrompt.for = 'length'
  lengthPrompt.textContent = 'Choose a length between 8 and 128 characters:';

  var lengthEnter = document.createElement('input');
  lengthEnter.type = 'text';
  lengthEnter.name = 'length';
  lengthEnter.id = 'length';

  var typeHeading = document.createElement('p');
  typeHeading.textContent = 'Choose which characters to include:'

  var typePrompt1 = document.createElement('label');
  typePrompt1.for = 'type1'
  typePrompt1.textContent = 'Lowercase letters'

  var typeEnter1 = document.createElement('input');
  typeEnter1.type = 'checkbox';
  typeEnter1.name = 'type1';
  typeEnter1.id = 'type1';

  var typePrompt2 = document.createElement('label');
  typePrompt2.for = 'type2'
  typePrompt2.textContent = 'Uppercase letters'

  var typeEnter2 = document.createElement('input');
  typeEnter2.type = 'checkbox';
  typeEnter2.name = 'type2';
  typeEnter2.id = 'type2';

  var typePrompt3 = document.createElement('label');
  typePrompt3.for = 'type3'
  typePrompt3.textContent = 'Digits'

  var typeEnter3 = document.createElement('input');
  typeEnter3.type = 'checkbox';
  typeEnter3.name = 'type3';
  typeEnter3.id = 'type3';

  var typePrompt4 = document.createElement('label');
  typePrompt4.for = 'type4'
  typePrompt4.textContent = 'Special Characters'

  var typeEnter4 = document.createElement('input');
  typeEnter4.type = 'checkbox';
  typeEnter4.name = 'type4';
  typeEnter4.id = 'type4';

  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';

  formArea.appendChild(form);
  form.appendChild(lengthPrompt);
  form.appendChild(lengthEnter);

  form.appendChild(typeHeading);

  form.appendChild(typePrompt1);
  form.appendChild(typeEnter1);

  form.appendChild(typePrompt2);
  form.appendChild(typeEnter2);

  form.appendChild(typePrompt3);
  form.appendChild(typeEnter3);

  form.appendChild(typePrompt4);
  form.appendChild(typeEnter4);

  form.appendChild(submit);

  submit.addEventListener('click', function(event) {
    event.preventDefault()
  });

  submit.addEventListener('click', generateRandomPassword);
}

var generateRandom = document.querySelector('#generateRandom');

generateRandom.addEventListener('click', openRandomQuery);


var generateMBtn = document.querySelector('#generateMnemonic');

function generateMnemonicPassword(event) {

  event.preventDefault();

  console.log("Make a mnemonic password");

  var formArea = document.querySelector('#formAreaMnemonic')

  var form = document.createElement('form');
  var header = document.createElement('h4')
  header.textContent = 'Answer at least 6 questions:'

  var midNamePrompt = document.createElement('label');
  midNamePrompt.for = 'midName'
  midNamePrompt.textContent = 'Your middle name:';

  var midNameEnter = document.createElement('input');
  midNameEnter.type = 'text';
  midNameEnter.name = 'midName';
  midNameEnter.id = 'midName'

  var fPetPrompt = document.createElement('label');
  fPetPrompt.for = 'fPet'
  fPetPrompt.textContent = 'Your First Pet:';

  var fPetEnter = document.createElement('input');
  fPetEnter.type = 'text';
  fPetEnter.name = 'fPet';
  fPetEnter.id = 'fPet'

  var mBirYearPrompt = document.createElement('label');
  mBirYearPrompt.for = 'mBirYear'
  mBirYearPrompt.textContent = "Your Mother's Birth Year:";

  var mBirYearEnter = document.createElement('input');
  mBirYearEnter.type = 'text';
  mBirYearEnter.name = 'mBirYear';
  mBirYearEnter.id = 'mBirYear'
 

  formArea.appendChild(header);
  formArea.appendChild(form);
  form.appendChild(midNamePrompt);
  midNamePrompt.appendChild(midNameEnter);
  form.appendChild(fPetPrompt);
  fPetPrompt.appendChild(fPetEnter);
  form.appendChild(mBirYearPrompt);
  mBirYearPrompt.appendChild(mBirYearEnter);

  var submit = document.createElement('input')
  submit.type = 'submit';

  form.appendChild(submit);

  submit.addEventListener('click', submitAnswer)

  function submitAnswer(event) {

  }

}

generateMBtn.addEventListener('click', generateMnemonicPassword);

//Need a prevent default for my form
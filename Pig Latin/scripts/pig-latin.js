//Pig Latin = Move first letter of the word to the end and add 'ay' to it.

//So "pig latin" becomes "igpay atinlay"



function pigLatinConverter() {
  

//Input from the user
  var userInput = document.getElementById("user-input").value; 
//Convert string to word array
	var inputAsWordArray = userInput.split(' '); 
	//console.log(inputAsWordArray); 


//Create nested array from user input array
//Loop the array to allow for multiple words to be input
for (var i = 0; i < inputAsWordArray.length; i++) {
  //Split the user input word array into (nested) letter array in order to move letters around
  var inputAsLetterArray = inputAsWordArray[i].split('');
 	//Store first letter of word to later add at end of array
  var firstLetter = inputAsLetterArray.shift();
  //Move first letter that was removed to the end of the letter array
  inputAsLetterArray.push(firstLetter);
  //Add 'ay' to end of letter array to complete pig latin transformation
  inputAsLetterArray.push('a', 'y');
  //Join letter array back together
  var translatedWords = inputAsLetterArray.join('');
  //Join word array back together
  inputAsWordArray[i] = translatedWords;
};


document.getElementById("result").innerHTML = inputAsWordArray.join(' ');
};




/*function test() {
	var userInput = document.getElementById("user-input").value; 
		document.getElementById("result").innerHTML = userInput;
}	*/




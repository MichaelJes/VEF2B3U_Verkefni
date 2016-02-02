"use strict";


// Að færa streng úr JS yfir í HTML
var spurning = "Who is Prime Minister of the United Kingdom?";
//  Notum DOM query  (t.d. getElementById) til að búa til vísun á <h1> í index.html og geymum í breytu
var elSpurning = document.getElementById("question");

// Notum DOM JS aðferð textContent til að færa streng yfir í index.html
elSpurning.textContent = spurning;

// DOM innerHTML JS aðferð getur blandað saman streng og html element  
elSpurning.innerHTML = "<em>" + spurning + "</em>";


// Að lesa úr object 
// Prófum nú að nota question í object (í stað þess að nota bara breytu)
var spurning = {
	question:   "Who is Prime Minister of the United Kingdom?",     
 	choices:   [ "David Cameron", "Gordon Brown", "Winston Churchill","Tony Blair"]
}

var spurning1 = spurning.question;  	// lesum quesion úr object yfir í breytu
elSpurning.textContent = spurning1; 	// færum streng yfir í html.




// Að lesa úr array af objectum
var allQuestions = [{
question:   "Who is Prime Minister of the United Kingdom?",     
 choices:   [ "David Cameron", "Gordon Brown", "Winston Churchill","Tony Blair"]
}];

var spurning1 = allQuestions[0].question;   // færum fyrsta objectið í fylkinu
	elSpurning.textContent = spurning1; 		// færum streng yfir í html.




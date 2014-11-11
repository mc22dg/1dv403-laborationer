"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			//Hämtar dagens datum
			var birthdayNextTime = new Date();
			 
			var dateToday = new Date(date)
			
			if(isNaN(dateToday))
			{
	
			if (birthdayNextTime > dateToday) {
				
				//setFullYear = Sets the year (four digits) of a date object
				//getFullYear = Returns the year (four digits)
				//
				birthdayNextTime.setFullYear(dateToday.getFullYear());
			
			if (dateToday > birthdayNextTime) {
				birthdayNextTime.setFullYear(dateToday.getFullYear()+1);
				
			}
			
				//floor = Returns x, rounded downwards to the nearest integer
			var diff = birthdayNextTime.setTime() - dateToday.getTime()
			var days = Math.ceil(diff/(1000*60*60*24))
				 
				
			} else{
			throw new Error ("Något gick mindre bra!")
			}



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
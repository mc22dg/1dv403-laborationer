"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			 //Här väljer användaren sitt datum
			var birthdayNextTime = new Date(date);
			 //Hämtar dagens datum
			var dateToday = new Date();
			
	if(isNaN(birthdayNextTime))
	{
		throw {'message' : "Datumet är ej giltigt!"};
	}
	
	if (birthdayNextTime > dateToday) 
	{
		throw {'message' : "Du har angivit ett datum för långt fram i tiden!"};
			
	}
					
			//setFullYear = Sets the year (four digits) of a date object
			//getFullYear = Returns the year (four digits)
			//Aktuellt år
			birthdayNextTime.setFullYear(dateToday.getFullYear());
			dateToday.getDate(dateToday.getDate()-1)
					
			//Om aktuell tid gått förbi födelsedagen som använadren angivit
			if (dateToday > birthdayNextTime) 
			{
				birthdayNextTime.setFullYear(birthdayNextTime.getFullYear()+1);
						
			}
						
				var diff = birthdayNextTime.getTime() - dateToday.getTime();
				//Math.ceil avrundar ett tal uppåt. Diff = skillnaden mellan dagens datum och datumet då användaren fyller år delat med 86400000 
				var days = Math.ceil(diff/(1000*60*60*24));
				
				return days;
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

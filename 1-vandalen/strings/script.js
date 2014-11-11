"use strict";

window.onload = function(){
	
	//var res = text.replace(/A,a/g, "#"); 
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		//Vidare ska funktionen ändra alla versaler i argumentet till gemener och alla gemener i argumentet till versaler
		//Skapa ett mÃ¶nster som letar reda pÃ¥ alla gemena och versala A
		
		var text = "";
		if (str.length > 0) 
		{
		
			for (var n = 0; n < str.length; n++) 
			{
				if (str.charCodeAt(n) >= 65 && str.charCodeAt(n) <= 90 || str.charCodeAt(n) >= 196 && str.charCodeAt(n) <= 214) 
				{
					text += str.charAt(n).toLowerCase().replace("a", "#");
				} else {
					text += str.charAt(n).toUpperCase().replace("A", "#");
				}
			}
		return text;
		} else {
			throw new Error("Strängen får inte vara tom!");
			}
		}; 	
		
		/*var text
		//Om strängen är tom...
			if (str === "") {

					throw new Error("Strängen får inte vara tom!");
			}
	
		//Om strängen innehåller tecken...
		if (str.length > 0) 
		
		{
			//Loopa igenom strängen
			for (var n=0; n < str.length; n++)
			{
				//Denna kodrad säger:
				//
				if (str.charCodeAt(n) >= 65 && str.charCodeAt(n) <= 90 || str.charCodeAt(n) >= 196 && str.charCodeAt(n) <= 214) 
				{
					//Ska dessa ersättas med 
					text += str.charAt(n).toLowerCase().replace(/a/g, "#");
				}
					//
					else {	text += str.charAt(n).toUpperCase().replace(/A/g, "#"); }
			}
			return text
		}
	}

	/*var string = "";
	var letters = /[aA]/g;
		//Byt ut alla tecken som matchar mÃ¶nstret vi skapade ovanfÃ¶r med ett #
		string = string.replace(letters, "#");
	
	/*for (var n=0; n<str.length; n+1){
	
	
		
		CharCodeAt()
		replace()
		charAt()
		unicode()
		toLowerCase()
		toUpperCase() */
	
		
		
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	






	
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});


};

"use strict";

window.onload = function(){
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		//Vidare ska funktionen ändra alla versaler i argumentet till gemener och alla gemener i argumentet till versaler
	
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
	
	/*
	if(str.charAt(i) == str.charAt(i).toUpperCase()){
		str.charAt(i).toLowerCase()
	}
	else
	{
		str.charAt(i).toUpperCase()
	}
	*/
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

"use strict";

function Window(desktop, title)   //Konstruktor
{
    var template = document.querySelector("#template"); //Hämtar template från index.html
    var windowTemplate = template.content.querySelector(".window"); //Hämtar window som ligger i template
    var w = windowTemplate.cloneNode(true); //Clonar det som står i windowTemplate och sätter det på variabeln w
    
    var titleElement = w.querySelector(".title"); //Title läggs i titleElement
    titleElement.innerHTML = title;
    desktop.element.appendChild(w);
    
}


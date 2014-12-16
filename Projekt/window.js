"use strict";

function Window(desktop, title)   //Konstruktor
{
    var template = document.querySelector("#template"); //Hämtar template från index.html
    var windowTemplate = template.content.querySelector(".window"); //Hämtar window som ligger i template
    this.w = windowTemplate.cloneNode(true); //Clonar det som står i windowTemplate och sätter det på variabeln w
    
    var titleElement = this.w.querySelector(".title"); //Title läggs i titleElement
    titleElement.innerHTML = title;
    desktop.element.appendChild(this.w);
    
    var self = this;
    
    var close = this.w.querySelector(".close")
    close.onclick=function()
    {
        self.close();        
    }
}

Window.prototype.close = function()
{
    this.w.parentNode.removeChild(this.w);
}


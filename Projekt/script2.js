"use strict";

window.onload = function(){
    
    var desk = new Projekt.Desktop(); //Är hela sidan
    
    var start = new Projekt.Start(desk);
    
    var wind = new Projekt.Window(desk, "First"); // Fönstret som kommer upp, desk = referens till desktop.js, first = namnet på rutan
    
    var gallery = new Projekt.Gallery();//var wind2 = new Projekt.Window(desk, "Second") // Andra rutan
    
};

var Projekt = {

    Window:function(desktop, title){
        {
        var template = document.querySelector("#template"); //Hämtar template från index.html
        var windowTemplate = template.content.querySelector(".window"); //Hämtar window som ligger i template
        this.w = windowTemplate.cloneNode(true); //Clonar det som står i windowTemplate och sätter det på variabeln w
        
        var titleElement = this.w.querySelector(".title"); //Title läggs i titleElement
        titleElement.innerHTML = title;
        console.log(title)
        desktop.element.appendChild(this.w);
        
        var self = this;
        
        var close = this.w.querySelector(".close")
        close.onclick=function()
        {
            console.log(self);
            Projekt.Close(self);        
        }
        }
    
    },
    Close:function(self){
    
        self.w.parentNode.removeChild(self.w);
        
    },
    Start:function(desk){
        var start = document.getElementById("start");
        var img = document.createElement("img");
        img.src = "pics/icon_open.png";
        start.appendChild(img);
    
            img.onclick = function()
            {
                var w = new Projekt.Window(desk, "First");
                var gallery = new Projekt.Gallery(w)
            };
    
    
    },
    Gallery:function(){
           var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", false );
    xmlHttp.send( null );
    console.log (xmlHttp.responseText);
    
    var data  = JSON.parse(xmlHttp.responseText);

    var thumbWidth = 0;
    var thumbHeight = 0;
    var html = "<ul>"
    
    data.forEach(function(value){
        console.log(value.thumbWidth); 
        //Här kontrolleras tumbildernas högsta värden på höjd och bredd
        if (value.thumbWidth >thumbWidth ){
            thumbWidth = value.thumbWidth;
        }
        if (value.thumbHeight > thumbHeight){
            thumbHeight = value.thumbHeight;
        }
        
        html += '<li><img src="'+value.thumbURL+'"></li>';
    });
    html += '</ul>';
    
    var box = document.querySelector(".box")
    box.innerHTML = html;
    
    
    console.log(html);
    },
    Desktop:function(){  //Konstruktor
    
    this.element = document.querySelector("#desktop");
    }

}
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
        desktop.element.appendChild(this.w);
        
        var self = this;
        
        var close = this.w.querySelector(".close")
        close.onclick=function()
        {
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
    xmlHttp.open( "GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true );
    xmlHttp.send( null );
    xmlHttp.onreadystatechange=function()
      {
      if (xmlHttp.readyState==4 )
        {
        document.querySelector(".underline").innerHTML='';
         var data  = JSON.parse(xmlHttp.responseText);

    var thumbWidth = 0;
    var thumbHeight = 0;
    var html = "<ul>"
    var x = 0;
    var big_images = [];
    data.forEach(function(value){ //En loop som via if-staserna kontrollerar bildernas höjd och bredd samt skapar dem i boxen.
        x++;
        //Här kontrolleras tumbildernas högsta värden på höjd och bredd
        if (value.thumbWidth >thumbWidth ){
            thumbWidth = value.thumbWidth;
        }
        if (value.thumbHeight > thumbHeight){
            thumbHeight = value.thumbHeight;
        }
        //Här skickas de stora bilderna in i ett objekt
        big_images.push({id : 'bild-'+x,
                        url :value.URL});
                        

        //Här får bilderna unika världen
        html += '<li><img id="bild-'+x+'" src="'+value.thumbURL+'"></li>';
    });
    html += '</ul>';
    

        
    
    //Här läggs bilderna in i boxen
    var box = document.querySelector(".box")
    box.innerHTML = html;

    var hejhopp = document.querySelectorAll(".box img");
    for (var i = 0; i < hejhopp.length; i++){
        console.log(hejhopp[i]);
        hejhopp[i].onclick = function() {
            var cur_id = this.id; 
            big_images.forEach(function(value){
                    
                    if(cur_id==value.id){
                        
                         document.getElementById("desktop").style.backgroundImage = 'url('+value.url+')';
                           
                    }
            });
        };
    };
    
    
        //Här läggs bilderna in i liselementet
        var el = document.querySelectorAll(".box li");
        for (var i = 0; i < el.length; i++) {
          el[i].style.width = thumbWidth+"px";
           el[i].style.height = thumbHeight+"px";
        }   
        
            
   

        }
      }
   
    },
    Desktop:function(){  //Konstruktor
    
    this.element = document.querySelector("#desktop");
    }

}
"use strict";

//Initierar hela applikationen
window.onload = function() {

    var desk = new Projekt.Desktop();

    new Projekt.Start(desk);

};

//Hela applikationen ligger i ett objekt vid namn Projekt 
var Projekt = {
    closed: true,
    //Funktion som ansvarar för att skapa ett fönster
    Window: function(desktop, title) {
        {
            if (Projekt.closed) {
                Projekt.closed = false;
                var template = document.querySelector("#template"); 
                var windowTemplate = template.content.querySelector(".window"); 
                this.w = windowTemplate.cloneNode(true); 
                var titleElement = this.w.querySelector(".title"); 
                titleElement.innerHTML = title+"The globe";
                desktop.element.appendChild(this.w);

                var self = this;

                var close = this.w.querySelector(".close");
                close.onclick = function() {
                    Projekt.Close(self);
                    Projekt.closed = true;
                };
            }
        }

    },
    Close: function(self) {

        self.w.parentNode.removeChild(self.w);

    },
    //Funktion som ansvarar för startmenyn och onklick-eventet för att öppna ett fönster
    Start: function(desk) {
        var start = document.getElementById("start");
        var img = document.createElement("img");
        img.src = "pics/blue_plus_icon.png";
        start.appendChild(img);
        img.onclick = function() {
            var w = new Projekt.Window(desk, '<img src="pics/icon_globe.png">');
            new Projekt.Gallery(w);
        };
    },
    /*Funktion som ansvarar för galleriet. Här hämtas bilderna från servern och presenteras som tumnagelbilder
    De läggs i ett objekt där varje bild får unika värden och läggs sedan in i boxen (fönstert)
    Sätter även bakrundsbilden*/
    Gallery: function() {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xmlHttp.send(null);
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4) {
                document.querySelector(".underline").innerHTML = '';
                var data = JSON.parse(xmlHttp.responseText);
                var thumbWidth = 0;
                var thumbHeight = 0;
                var html = "<ul>";
                var imgId = 0;
                var big_images = [];
                data.forEach(function(value) { 
                    imgId++;
                  
                    if (value.thumbWidth > thumbWidth) {
                        thumbWidth = value.thumbWidth;
                    }
                    if (value.thumbHeight > thumbHeight) {
                        thumbHeight = value.thumbHeight;
                    }
                    big_images.push({
                        id: 'bild-' + imgId,
                        url: value.URL
                    });

                    html += '<li><img id="bild-' + imgId + '" src="' + value.thumbURL + '"></li>';
                });
                html += '</ul>';

                var box = document.querySelector(".box");
                box.innerHTML = html;

                var boxImg = document.querySelectorAll(".box img");
                for (var i = 0; i < boxImg.length; i++) {
                    console.log(boxImg[i]);
                    boxImg[i].onclick = function() {
                        var cur_id = this.id;
                        big_images.forEach(function(value) {

                            if (cur_id == value.id) {

                                document.getElementById("desktop").style.backgroundImage = 'url(' + value.url + ')';

                            }
                        });
                    };
                }

                var el = document.querySelectorAll(".box li");
                for (var i = 0; i < el.length; i++) {
                    el[i].style.width = thumbWidth + "px";
                    el[i].style.height = thumbHeight + "px";
                }
            }
        };
    },
    Desktop: function() {
        this.element = document.querySelector("#desktop");
    }
};
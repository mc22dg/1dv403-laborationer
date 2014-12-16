"use strict";

function Start (desk)
{
    var start = document.getElementById("start");
    var img = document.createElement("img");
    img.src = "pics/icon_open.png";
    start.appendChild(img);
    
    img.onclick = function()
    {
        var w = new Window(desk)
        var gallery = new Gallery(w)
    };
    
    
}



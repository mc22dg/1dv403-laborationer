"use script";


window.onload = function(){
    
    var desk = new Desktop(); 
    
    var start = new Start(desk);
    
    var wind = new Window(desk, "First"); // Första rutan, desk = referens till desktop.js, first = namnet på rutan
    
    var wind2 = new Window(desk, "Second") // Andra rutan
    
};
"use strict";

var memory = {
    
    memoryArray: [],
    init:function(){
        
        var rows = 4; //rader
        var cols = 4; //kolumner
        
        
        memory.memoryArray = RandomGenerator.getPictureArray(rows, cols);
        console.log(memory.memoryArray);
       
        //Skapa en tabell
        memory.table = document.createElement("table");
        memory.table.border = 2;
        
        
        //Här skrivs den vågräta spelraden ut
        for (var i = 0; i < rows; i += 1)
        {
            //skapa en ny rad
            var row = document.createElement("tr");
            
            //Här skrivs varje cell ut
            for (var j = 0; j < cols; j += 1)
            {
                //skapa en ny kolumn
                var cell = document.createElement("td");
                var link = document.createElement("a");
                var img = document.createElement("img");
                
                link.href = "#";
                link.onclick = memory.flipTile;
                
                var n = j * cols + i;
                
                link.innerHTML = memory.memoryArray[n]; 
                
                                
                img.src = "pics/0.png";
                
                //Här läggs cellen i raden
                row.appendChild(cell);
                //Här läggs bilden i cellen
                //link.appendChild(img);
                //Här läggs länken som har en bild i sig till cellen
                cell.appendChild(link);
                
            }
            memory.table.appendChild(row);
            
        }
        
        //append child
        document.body.appendChild(memory.table);
    },
    
    
    flipTile:function(){
        console.log("hejhopp");
    }
    
    
};

window.onload = memory.init;
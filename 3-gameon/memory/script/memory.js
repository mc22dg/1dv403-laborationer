"use strict";

var memory = {
    
    memoryArray: [],
    counter: 0,
    tryCount: 0,
    last: null ,
    
    pairs: 0, //Hur många par som finns
    init:function(){
        
        var rows = 4; //rader
        var cols = 4; //kolumner
        memory.pairs = rows * cols / 2;
        
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
                
                //# = gör länken klickbar
                link.href = "#";
                link.onclick = memory.flipTile;
                link.flipped = false;
                
                //"formel" för index (position) för ikonerna i tabellen
                var n = j * cols + i;
                
                link.number = memory.memoryArray[n];
                
                //link.innerHTML = memory.memoryArray[n]; 
                link.img = img;
                                
                img.src = "pics/0.png";
                
                //Här läggs cellen i raden
                row.appendChild(cell);
                //Här läggs bilden i cellen
                link.appendChild(img);
                //Här läggs länken som har en bild i sig till cellen
                cell.appendChild(link);
            }
            memory.table.appendChild(row);
            
        }
        
        //append child
        document.getElementById("table").appendChild(memory.table);
    },
    
    flipTile:function(){
        
        if(this.flipped){
            return;
        }    
        
        this.flipped = true;
         
        this.img.src = "pics/"+ this.number +".png";
        memory.counter++;
        
        //om senaste brickan inte är null
        if(memory.last != null){
            
            //om räknar är större eller lika med 2 (då har vi tagit två brickor)
            if(memory.counter >= 2){
                memory.tryCount++;
                console.log(memory.tryCount);
               
                //om senaste och sista brickan (siffran) är samma 
                if(memory.last.number == this.number){
                    console.log("hurra")
                    memory.pairs--;
                    if(memory.pairs == 0){
                        alert("Grattis!" + " Du klarade det på "+ memory.tryCount +" försök.");
                    }
                }
                else{
                    
                    var last = memory.last;
                    var that = this;
                    
                    window.setTimeout(function() {
                        
                        last.img.src = "pics/0.png";
                        that.img.src = "pics/0.png";
                        that.flipped = false;
                        last.flipped = false;
                    }, 1000);
                    
                }
                memory.counter = 0
            }
        }
        memory.last = this;
    }

};

window.onload = memory.init;
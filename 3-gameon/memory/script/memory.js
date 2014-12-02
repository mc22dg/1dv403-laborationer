"use strict";

var memory = {
    
    memoryArray: [],
    
    init:function(){
        
        var rows = 4;
        var cols = 4;
        
        
        memory.memoryArray = RandomGenerator.getPictureArray(rows, cols);
        console.log(memory.memoryArray.length);
        console.log(memory.memoryArray);
       
        //Skapa en tabell
        memory.table = document.createElement("table");
        memory.table.border = 2;
    
        //Skapa ett spelbord
        memory.gameBoard = document.getElementById("memory_board");
        
        //Här skrivs den vågräta spelraden ut
        for (var i = 0; i < memory.rows; i += 1)
        {
           
            
           //Här skrivs varje cell ut
            for (var j = 0; j < memory.cols; j += 1)
            {
           
               
            }
            
            
        }
        
        
        
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};

window.onload = memory.init;
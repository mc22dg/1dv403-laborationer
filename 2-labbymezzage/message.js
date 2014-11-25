"use strict";

window.onload = function(){
    
    function message(message, date){
        
    	this.getText = function(){ //Hämtar meddelandetexten
                return message;
        }
        this.setText = function(_text){ //Sätter meddelandetexten
                message = _text;
        }
        this.getDate = function(){ //Hämtar datumet
                 return date;
        }
        this.setDate = function(_date){ //Sätter datumet
                   date = _date;
        }

}
        
Message.prototype.toString = function(){ //En strängpresentation av objektet
        return this.getText()+" ("+this.getDate()+")";
        }
        

Message.prototype.getHTMLText = function() { //Hämtar texten med \n utbytt mot <br>
return this.getText().replace(/ \n /g, "<br />");
        }

Message.prototype.getDateText = function(){
        }
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
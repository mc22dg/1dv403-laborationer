"use strict";

window.onload = function(){
    
    var quiz = new Quiz();
    
    //Här är länken för frågorna
    quiz.fetchQuestion("http://vhost3.lnu.se:20080/question/1");
  
};

//Konstruktorfunktionen
function Quiz(){
    
    this.talker = new XMLHttpRequest();
}


Quiz.prototype.process = function(rawdata,status){
    
   //översätt datan
    var data = JSON.parse(rawdata);
    
    //presentera meddelandet (kalla på det)
   this.showMessage(data.message);
   
    //fått en fråga
    if (data.question) {
        this.showQuestion(data.question);
        var button = document.getElementById("button");
        var that = this;
        button.onclick = function() {
            that.sendAnswer(data.nextURL);
        };
    }
    else {
        if(status == 200){
            if(data.nextURL){
                this.fetchQuestion(data.nextURL);
            }
            else{
                var done = document.getElementById("done");
                done.innerHTML = "Du klarade alla frågor!";
                this.showMessage("");
                this.sendAnswer("");
                this.showResult("");
                
            }
            this.showResult(data.message);
        }
        else{
            this.showResult("");
            
        }
    }

    
    console.log(data);
};

Quiz.prototype.showMessage = function(text){
    
    var element = document.getElementById("message");
    element.innerHTML = text;
    
};

Quiz.prototype.showQuestion = function(text){
  
    var element = document.getElementById("question");
    element.innerHTML = text;
    
};

Quiz.prototype.showResult = function(text){
    var result = document.getElementById("result");
    result.innerHTML = text;
};


Quiz.prototype.fetchQuestion = function(url){
  var that = this;
  
    this.talker.onreadystatechange = function(){
        
        if (this.readyState === 4) {
            that.process(this.responseText);
        }
        
    };
    
    this.talker.open("GET", url, true);
    this.talker.send(null);
};

Quiz.prototype.sendAnswer = function(url){
  
  var input = document.getElementById("comment").value;
  var json = JSON.stringify( { answer: input } );
  console.log(json + " url: " + url);
  
  var that = this;
  
   this.talker.onreadystatechange = function(){
        
        if (this.readyState === 4) {
            that.process(this.responseText,this.status);
        }
        
    };
    
    this.talker.open("POST", url, true);
    this.talker.setRequestHeader("Content-Type","application/json");
    this.talker.send(json);
  
};
"use strict";

window.onload = function(){
    
    var quiz = new Quiz();
    
    quiz.fetchQuestion("http://vhost3.lnu.se:20080/question/1");
  
};

function Quiz(){
    
    this.talker = new XMLHttpRequest();
}


Quiz.prototype.process = function(rawdata){
    
   //översätt data
    var data = JSON.parse(rawdata);
    
    //presentera meddelandet (kalla på det)
   this.showMessage(data.message);
   
    //fått en fråga
    if (data.question) {
        this.showQuestion(data.question)
    }
    //ja
    
    //nej
    
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

Quiz.prototype.sendAnswer = function(){
  
  
  
};
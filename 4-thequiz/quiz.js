"use strict";

window.onload = function(){
    
    var quiz = new Quiz(); //Instans av klass genom objekt
    
    //Här är länken för frågorna
    quiz.fetchQuestion("http://vhost3.lnu.se:20080/question/1");
  
};

//Konstruktorfunktionen
function Quiz(){
    
    this.talker = new XMLHttpRequest();
    this.count = 0;
    this.countArray = [];
}


Quiz.prototype.process = function(rawdata,status){
    
    //Översätter datan
    var data = JSON.parse(rawdata);
    
    //Presentera meddelandet (kallar på det)
    this.showMessage(data.message);
   
    //Fått en fråga
    if (data.question) 
    {
        this.showQuestion(data.question);
        var button = document.getElementById("button");
        var that = this;

        var counter = document.getElementById("counter");
        //counter.innerHTML = count;
        console.log(this.count);

        button.onclick = function() {
            that.sendAnswer(data.nextURL);
            that.count++;
    };
    }
    else {
        if(status == 200){ //Allt är ok
            if(data.nextURL){
                this.countArray.push(this.count);
                this.count = 0;
                this.fetchQuestion(data.nextURL);
            }
            else{
                var done = document.getElementById("done");
                done.innerHTML = "Du klarade alla frågor!";
                
                console.log(this.countArray);
                var points = document.querySelector("#points") //Hämtar
               
                //this.countArray.foreach{}
                points.innerHTML = "Poäng";
                for(var i = 0; i < this.countArray.length; i++){ //Loop som räknar antalet gissningar på varje fråga
                    points.innerHTML += "<br>Fråga"+(i+1)+":"+this.countArray[i];
                }
                
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
  var json = JSON.stringify( { answer: input } ); //Översätter datan
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
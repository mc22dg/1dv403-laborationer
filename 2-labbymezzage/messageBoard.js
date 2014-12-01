"use strict";

var MessageBoard = {
   
    messages:[],
    
    init:function()//Denna funktion styr så att när man klickar på skicka knappen alt. trycker Enter, skickas meddelandet iväg till  
    {
        var send = document.getElementById("btn"); 
        send.onclick = function(e){
            if (document.getElementById("comment").value !== "")
            {
            MessageBoard.sendMessage();
            }
            else
            e.preventDefault();
        };
        
        var enter = document.getElementById("comment");
        enter.onkeypress = function(e){if(e.keyCode === 13 && !e.shiftKey && document.getElementById("comment").value !== "")
        {
            e.preventDefault();
            MessageBoard.sendMessage();
        }
        if(e.keyCode === 13 &&  document.getElementById("comment").value === "")
        {
            e.preventDefault();
        }
        }
        
        
    },
    
    sendMessage:function()
    {
       var text = document.getElementById("comment").value; //Lägger in värdet i comment och lägger det i variabeln text.
       var message = new Message(text, new Date()); //
       MessageBoard.messages.push(message);
       var arrayslot = MessageBoard.messages.length-1;
       console.log(arrayslot);
       document.getElementById("numberOfMess").innerHTML = "Antal meddelanden: "+MessageBoard.messages.length;
       document.getElementById("comment").value = "";
       MessageBoard.RenderMessage(arrayslot);
       

    },
    
    RenderMessages:function()
    {
        document.getElementById("message").innerHTML = "";
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.RenderMessage(i);
        }
        
    },
    
    RenderMessage:function(arrayslot)
    {
        console.log(MessageBoard.messages);
       var div = document.createElement("div");
       div.id = "enkommentar";
       var textfalt = document.createElement("p");
       textfalt.innerHTML = MessageBoard.messages[arrayslot].getHTMLText();
       

       var messagesList = document.getElementById("message");
       
       var imgClock = document.createElement("img") 
       var imgDelete = document.createElement("img")
       imgClock.src = "clock.png";
       imgDelete.src = "trash.png";
       var timestamp = document.createElement("div");
       timestamp.innerHTML = MessageBoard.messages[arrayslot].getDateText();
        imgDelete.onclick = function(){
           if(confirm("Är du säker på att du vill radera meddelandet"))
           {
    
                       MessageBoard.messages.splice(arrayslot, 1)
                        document.getElementById("numberOfMess").innerHTML = "Antal meddelanden: "+MessageBoard.messages.length;
                         MessageBoard.RenderMessages();
           }
       }
       
       textfalt.appendChild(imgDelete);
       div.appendChild(textfalt);
       messagesList.appendChild(div);
       
       textfalt.appendChild(imgClock);
       textfalt.appendChild(timestamp);
       div.appendChild(textfalt);
       messagesList.appendChild(div);
       var element = document.getElementById("message");
       element.scrollTop = element.scrollHeight;
   
       
       imgClock.onclick = function()
       {
           alert( MessageBoard.messages[arrayslot].getFormatedDateText() );
       }
    
    }
    

};

  
  // <div class="glyphicon glyphicon-time"></div>
            //    <div class="glyphicon glyphicon-remove-circle"></div>
            
window.onload = MessageBoard.init;
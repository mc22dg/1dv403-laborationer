"use strict";

var MessageBoard = {
   
    messages:[],
    
    init:function()
    {
        var send = document.getElementById("btn");
        send.onclick = MessageBoard.sendMessage;
    },
    
    sendMessage:function()
    {
       var text = document.getElementById("comment").value; //Lägger in värdet i comment och lägger det i variabeln text.
       var message = new Message(text, new Date()); //
       MessageBoard.messages.push(message);
       var arrayslot = MessageBoard.messages.length-1;
       console.log(arrayslot);
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
       
    imgDelete.onclick = function(){
       if(confirm("Är du säker på att du vill radera meddelandet"))
       {

                   MessageBoard.messages.splice(arrayslot, 1)
                     MessageBoard.RenderMessages();
       }
    

       }
       
       textfalt.appendChild(imgDelete);
       div.appendChild(textfalt);
       messagesList.appendChild(div);
       
       textfalt.appendChild(imgClock);
       div.appendChild(textfalt);
       messagesList.appendChild(div);
       
       imgClock.onclick = function()
       {
           alert(Message.getFormattedTime)
       }
    
    },
    
    DeleteMessages:function() 
    {  
        
        
        
        
    }
    
    
    
    
    
};

  
  // <div class="glyphicon glyphicon-time"></div>
            //    <div class="glyphicon glyphicon-remove-circle"></div>
            
window.onload = MessageBoard.init;
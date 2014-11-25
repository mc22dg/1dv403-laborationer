{"filter":false,"title":"messageEngine.js","tooltip":"/2-labbymezzage/messageEngine.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":17},"action":"remove","lines":["func"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":21},"action":"insert","lines":["function"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":21},"end":{"row":6,"column":23},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":8,"column":9},"action":"insert","lines":["","            ","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["\"use strict\"","","var MessageBoard = {","","        messages: [], //En array för alla meddelanden.","        ","        init:function(){","            ","        }","       ","}"]},{"start":{"row":0,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["\"use strict\";","var MessageBoard = {","messages:[],","init:function(){","document.getElementById(\"skriv\").onclick=function(){MessageBoard.messageAdd()};","document.onkeypress = function (e) {","if (e.keyCode == 13&& !event.shiftKey){","MessageBoard.messageAdd();","}","};","},","render:function(){","document.getElementById(\"messages\").innerHTML = '';","var i = 0;","MessageBoard.messages.forEach(function(message){","document.getElementById(\"messages\").innerHTML += MessageBoard.messageGenarate(i);","i++;","});","document.getElementById(\"count\").innerHTML = 'Antal meddelanden: ' + i;","},","messageAdd:function(){","MessageBoard.messages.push( new message(document.getElementById(\"kommentar\").value));","document.getElementById(\"kommentar\").value = '';","MessageBoard.render();","},messageGenarate:function(id){","var message = '<div class=\"panel panel-default\"><div class=\"panel-heading\">' + MessageBoard.messages[id].toStringMini() + '<div class=\"button-right\"><button type=\"button\" onclick=\"MessageBoard.showDate(' + id + ')\" id=\"datum-' + id + '\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-info-sign glyphicon-align-left\" aria-hidden=\"true\"></span> Visa tiden</button><button type=\"button\" onclick=\"MessageBoard.messageRemove(' + id + ')\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-remove-circle glyphicon-align-left\" aria-hidden=\"true\"></span> Radera</button></div></div><div class=\"panel-body\">' + MessageBoard.messages[id].getHTMLText() + '</div></div>';","return message;","},messageRemoveAdd:function(id){","var i = 0;","MessageBoard.messages.forEach(function(message){","var string = \"radera-\"+i;","document.getElementById(string).onclick=function(){MessageBoard.messageRemove(this.id);};","i++;","});","},messageRemove:function(num){","MessageBoard.messages.splice(num, 1);","MessageBoard.render();","},showDate:function(num){","alert(MessageBoard.messages[num].toString());","}","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":1},"end":{"row":41,"column":2},"action":"remove","lines":["   document.getElementById(\"skriv\").onclick=function(){MessageBoard.messageAdd()};","        document.onkeypress = function (e) {","        if (e.keyCode == 13&& !event.shiftKey){","MessageBoard.messageAdd();","}","};","},","render:function(){","document.getElementById(\"messages\").innerHTML = '';","var i = 0;","MessageBoard.messages.forEach(function(message){","document.getElementById(\"messages\").innerHTML += MessageBoard.messageGenarate(i);","i++;","});","document.getElementById(\"count\").innerHTML = 'Antal meddelanden: ' + i;","},","messageAdd:function(){","MessageBoard.messages.push( new message(document.getElementById(\"kommentar\").value));","document.getElementById(\"kommentar\").value = '';","MessageBoard.render();","},messageGenarate:function(id){","var message = '<div class=\"panel panel-default\"><div class=\"panel-heading\">' + MessageBoard.messages[id].toStringMini() + '<div class=\"button-right\"><button type=\"button\" onclick=\"MessageBoard.showDate(' + id + ')\" id=\"datum-' + id + '\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-info-sign glyphicon-align-left\" aria-hidden=\"true\"></span> Visa tiden</button><button type=\"button\" onclick=\"MessageBoard.messageRemove(' + id + ')\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-remove-circle glyphicon-align-left\" aria-hidden=\"true\"></span> Radera</button></div></div><div class=\"panel-body\">' + MessageBoard.messages[id].getHTMLText() + '</div></div>';","return message;","},messageRemoveAdd:function(id){","var i = 0;","MessageBoard.messages.forEach(function(message){","var string = \"radera-\"+i;","document.getElementById(string).onclick=function(){MessageBoard.messageRemove(this.id);};","i++;","});","},messageRemove:function(num){","MessageBoard.messages.splice(num, 1);","MessageBoard.render();","},showDate:function(num){","alert(MessageBoard.messages[num].toString());","}","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":1},"end":{"row":6,"column":69},"action":"insert","lines":["  <div class=\"glyphicon glyphicon-time\"></div>","                <div class=\"glyphicon glyphicon-remove-circle\"></div>"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":2},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":2},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":2},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":2},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":2},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":2},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":2},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":2},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":2},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":9,"column":26},"action":"insert","lines":["document.getElementById(\"skriv\").onclick=function(){MessageBoard.messageAdd()};","document.onkeypress = function (e) {","if (e.keyCode == 13&& !event.shiftKey){","MessageBoard.messageAdd();"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":42},"end":{"row":6,"column":43},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":42},"end":{"row":6,"column":43},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["a"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":38},"end":{"row":9,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416930815592,"hash":"11360e1a38c989a083fbf58f385d1e0fb8984dac"}
/* Global Variables */
var picks;    //counts how may picks have been made in each turn
picks = 0;
var firstchoice;    //stores index of first card selected
var secondchoice;   //stores index of second card selected
var cntr = 0;     //counts matches made
var numAttempts = 0; //counts attempts made
var backcard ="blank.png";    //shows back of card when turned over
var faces = [];   //array to store card images
faces[0] = 'camel.jpg';
faces[1] = 'lion.jpg';
faces[2] = 'giraffe.jpg';
faces[3] = 'giraffe.jpg';
faces[4] = 'camel.jpg';
faces[5] = 'lion.jpg';
faces[6] = 

/* Responds to click on a table cell indicating card selected */
function choose(card) {
 
if (picks==2) {   //if 2 picks made, do nothing
  return ;
}
if (picks==0) {   //if first pick, identify card selected
  firstchoice=card;
  document.images[card].src = faces[card];
  picks = 1;    //one pick made
  }
else
 { picks = 2;   //second pick, identify card selected
  secondchoice = card;
  document.images[card].src =faces[card];
  tid=setInterval("check()",1000); //use timer to pause so user can see selections
   }
}


/* Check to see if a match is made */
function check() {
 clearInterval(tid); //stop timer
 numAttempts++;   //add 1 to attempts
 document.getElementById("attempts").innerHTML = numAttempts; //display number of attempts
 if (faces[secondchoice]==faces[firstchoice]) {   //if a match is selected
     cntr++;    //add 1 to matches
     if (cntr == numOfMatches) {  //if matches made = maximum possible matches, display message
          alert("You won.\n It took you " + numAttempts + " attempts.\n Refresh the page to play again.");
         }
     picks = 0;
      return ;
    }
  else {  //if no match made, turn cards back over
    document.images[firstchoice].src = backcard;
    document.images[secondchoice].src = backcard;
    picks = 0;
    return ;
       }
}
"use strict";

var makePerson = function(persArr){

    var result = {};
    //Här plockas för- och efternamn ut och sorteras innan de sätt ihop igen.
    var names = persArr.map 
    (function (names)
    {return names.name;}).sort
    (function(a, b) 
    {return a.localeCompare(b) })
    //Sätter dit ett komma tecken efter namnet
    .join(", ");
    
    //Plockar ut åldrarna
    var age = persArr.map(function(age){return age.age;});
    
    //Hämtar ut max och mini ålder ur ages-arrayen
    var minAge = Math.min.apply(Math, age);
    var maxAge = Math.max.apply(Math, age);
    //Lägger ihop alla åldrar för att få fran medelåldern samt sorterar dessa i ordning
    var averageAge = age.reduce(function(a, b){return a + b});
    
    averageAge /= age.length;
    //Avrundar
    averageAge = Math.round(averageAge);
    //Lägger in i objektet
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = averageAge;
    result.names = names;
    return result;

};
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
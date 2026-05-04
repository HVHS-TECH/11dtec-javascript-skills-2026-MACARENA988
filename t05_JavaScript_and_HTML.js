/****************************
Name of task:
****************************/

console.log("Running t05_JavaScript_and HTML.js")
console.log("/*This is annoying*/")

//Varibles
let userMoney;
let userAge;
let userName;
let currentYear;
let plusThree;
let divideTwo;

userName = "Lukys";
userAge = 15;
userMoney = 100;
currentYear = 2026;
divideTwo = userMoney/2;
plusThree = userMoney/2+3;


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/****************************
Main code:
****************************/
OUTPUT.innerHTML = "<p>Hi " + userName;
OUTPUT.innerHTML +="<p>As of "+ currentYear + " you are " + userAge + " years old";
let yearBorn = currentYear - userAge;
OUTPUT.innerHTML += "<p>You were born in " + yearBorn ;
OUTPUT.innerHTML +="<p>You have " + userMoney + " dollars";
OUTPUT.innerHTML += "<p>You spend half of your money, now you have " + divideTwo;
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + plusThree;

/****************************
Functions:
****************************/
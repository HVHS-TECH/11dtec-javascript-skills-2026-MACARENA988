/****************************
Name of task:
****************************/

console.log("Running t07_functions_parameters.js")
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

welcome()

displayProduct("Chips", 3);
displayProduct("Chocolate bar", 4);
displayProduct("Drink", 2.50);

OUTPUT.innerHTML += "<p>Hi " + userName;
OUTPUT.innerHTML +="<p>As of "+ currentYear + " you are " + userAge + " years old";
let yearBorn = currentYear - userAge;
OUTPUT.innerHTML += "<p>You were born in " + yearBorn ;
OUTPUT.innerHTML +="<p>You have " + userMoney + " dollars";
OUTPUT.innerHTML += "<p>You spend half of your money, now you have " + divideTwo;
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + plusThree;



/****************************
Functions:
****************************/
function welcome(){
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Welcome to the shop";
  }

function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p> " +_name + ": " + _price;
  }
  
  
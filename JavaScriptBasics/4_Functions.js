//Structure for creating/declaring a function
function nameOfFunction(){
    // Code here / statement
}


// Declaring a function called [add]
function add(){
    let added = 12 + 58;
    console.log(added);
}

add(); // Invoking the function [add]


function minus(){
    let subtract = 658-247;
    console.log(subtract);
}

minus();

// Declaring functions with parameters

function multiply(numA, numB){

    console.log(numA * numB);
}


multiply(4, 5); // Pass the arguments for the results


function greetings(name){
    console.log("Good Morning " + name);
}

greetings("Susan");

function isOldOrYoung(age){
    if(age>16) {
        return "You are old enough"
    }
    else {
        return "You are too young"
    }
}

let kofi = isOldOrYoung(40);
let ama = isOldOrYoung(14);

console.log(kofi);
console.log(ama);

function multiplyB(numA, numB){
    return numA * numB;

}

console.log(multiplyB(2,7));




function gradeMe(grade){
    if (grade > 80) {
      console.log ("A")
    }
    else if (grade > 70) {
      console.log("B")
    }
    else if (grade > 60) {
       console.log("C")
    }
    else if (grade > 50) {
       console.log("D")
      }
    else if (grade > 40) {
         console.log("E")
    }
    else {
       console.log("U")
    }
    }
    
    gradeMe(72)
    
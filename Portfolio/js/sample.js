let number = 5;
//console.log(number);

let string = "This is a string";
//console.log(string);

let x;
//console.log(x);

let noValue = null;


// Comparison Operators 
/**
 * Comparison operators return true or false
 */

let y = '9';
let z = 9;
let p = 5;

let doubleEqual = (y == z) // Returns true if the value is the same
let tripleEqual = (y === z); // Returns true if the false and datatype are the same.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
let isNotEqualOne = (y != z);
let isNotEqualTwo = (y !== z);

let isGreaterThan = (z > p); 
let isLessThan = (p < z);

// && / and

let answerOne = (y && p); // And
let answerTwo = (y || p); // Or

console.log(answerOne);
console.log(answerTwo);





var name = 'Augustine'

var condition = 'cute'

console.log(name)
if(condition){
  let  name = 'Koko'
  console.log(name)
}
console.log(name)





let phone;
phone = 'Samsung';

let nUmber = 5;

let fullName = "Susan Koko";

console.log(fullName);
console.log(phone);
console.log(number);

console.log(phone);

// Comments

//Single line comments

/*
Multi line  comments
*/

// Data types
let num = 34.67; //Number

// Strings
let str1 = 'this is a string.';
let str2 = "this is 2";
let str3 = `this is 3`;

//Boolean 
let isTrue = true;
let isFalse = false;
let isNull = Boolean(null);

// Null
//let age = null;

//Undefined
let value1;
let demo = undefined; 

var ages = [2,3,4,5,6,7,8,33,77,22,83,56,2]
console.log(ages[3])


for (let i = 0; i<ages.length; i++){
  //console.log('Age at index '+ i + ' = ' +ages[i])
}

console.log('-----------------------------------------');

function Person(firstname, lastname, age, gender){

//let person = 
return {"name":{"firstname":firstname,"lastname":lastname },
"age":age,
"gender":gender,

"add10":function(){
  return 10 + this.age},

"addName":function(){
  //return firstname + " " + lastname
  return this.name.firstname + " " + this.name.lastname
}
}}



// let susan = new Person("susan","koko",21,"female");
let stark = new Person("Tony","Stark",31,"male");
 
console.log(Person("susan","koko",21,34).addName());
let object = Object.keys(stark)
let values = Object.values(stark)
console.log(object);
console.log(values);

console.log(Math.max(2,6,7,34));

// console.log(susan.add10);

// let person = {"name":{"lastname":"koko","firstname":"susan" , "fullname":function(){
//   return this.firstname + " " + this.lastname
// }}, 
// "skills":["js","css","html"],"age":18, "isFemale":false, "add10":function(){
//   return 10 + this.age
// }}

// let person1 = {"name":{"lastname":"koko","firstname":"susan"}, 
// "skills":["js","css","html"],"age":21, "isFemale":true, "add10":function(){
//   return 10
// }}

// console.log(person.name.fullname())
// console.log(person.add10())

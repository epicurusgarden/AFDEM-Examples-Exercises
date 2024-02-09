//use strict

/* Declare the function 'myFunc' */
// function myFunc(anObject) {
//   anObject.brand = "Toyota";
// }
// /*
//  * Declare variable 'mycar';
//  * create and initialize a new Object;
//  * assign reference to it to 'myNewCar'
//  */
// var myNewCar = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2010
// };
// /* Logs 'Honda' */
// console.log(myNewCar.brand);
// /* Pass object reference to the function */
// myFunc(myNewCar);
// /*
//  * Logs 'Toyota' as the value of the 'brand' property
//  * of the object, as changed to by the function.
//  */
// console.log(myNewCar.brand);


// //==NESTED FUNCTIONS==

// function calculateTotal(price,quantity) {
// 	var subtotal = price * quantity;
// 		// this function is nested
// 	function calculateTax(subtotal) {
// 		var taxRate = 0.24;
// 		var tax = subtotal * taxRate;
// 		return tax;
// 	}
//   return subtotal + calculateTax(subtotal);
// }

// const blackFridayGames = calculateTotal(60, 2);
// console.log(blackFridayGames);

//==FUNCTION NAMES==

/* The name of a function expression is only accessible inside the function, where the function can use it to refer to itself*/

//const func = function funcExpr() {return console.log('Hello func')};
// console.log(func);
// //cannot access funcExpr from outside
// // console.log(funcExpr);

// // let funFunc =  funcExpr();
// let funFunc = func();
// console.log(funFunc);


//==.call() && .apply()==

// const anObject = {
//   myProperty : 'Καβάφης',
//   myMethod : function(before, after) {
// 	alert(before + this.myProperty + after);
//   }
// };

// //Comment after execute 
// // anObject.myMethod('<', '>'); 

// const anotherObject  = {
// 	myProperty : 'Καριωτάκης'
// };

//anObject.myMethod.call(anotherObject, '<', '>'); 

//anObject.myMethod.apply(anotherObject, ['<', '>']); 

//==CALLBACKs==
// Example 1


// function codeHomework(subject, callback) {
// alert(`Starting my ${subject} coding homework.`);
//   	callback();
// }

// function alertFinished(){
//   alert('Finished my coding homework');
// }

// codeHomework('Javascript', alertFinished);


//Example 2

// var calculateTotal = function(price, quantity, tax) {
// 	var subtotal = price * quantity;
// 	return subtotal + tax(subtotal);
// };

// var calcTax = function(subtotal) {
// 	var taxRate = 0.05;
// 	var tax = subtotal * taxRate;
// 	return tax;
// };

// var temp = calculateTotal(50,2,calcTax);
// console.log(temp);

// //We can pass an anonymous function as a callback function parameter to temp with same results:

// var temp = calculateTotal(50,2,
//   function (subtotal){
//     var taxRate = 0.05;
// 		var tax = subtotal * taxRate;
// 		return tax;
//   });

// console.log(temp);

//==THIS==

// function sayHi() {
//     console.log("Hello THIS!");
// }

// sayHi(); // This is a call-site for greet

//A. Case Default - this points to the global object 

// function sayHi() {
//     console.log(this.x);
// }

// var x = "I must understand this";
// sayHi();  

//B. Case Implicit 


// // C. Case Explicit (call, bind)

// function explicitMe() {
//     console.log(this.A);
// }

// var obj = {
//     A: "έχω το κοντρόλ"
// }

// // explicitMe.call(obj);

// const bindThis = explicitMe.bind(obj);
// console.log(bindThis());

//D. Case function constructor (new)
// function ComicHero(age) {
//      this.age = age;
// }

// var mickeyMouse = new ComicHero(92);
// var hulk = new ComicHero(58);

// console.log(mickeyMouse.age); 
// console.log(hulk.age); // 27

//==SCOPE==
//global scope
// var one = 1;

// function outer() {
//   //function scope
//     var two = 2;

//     function inner() {
//       // nested function scope
//         var three = 3;
//         console.log(one, two, three); // 1 2 3
//     }

//     console.log(one, two); // 1 2
//     console.log(three); // ReferenceError: three is not defined
// }
// // //check outer
// inner();
// outer(); 
//console.log(one); 
// console.log(two); 
// console.log(three); 



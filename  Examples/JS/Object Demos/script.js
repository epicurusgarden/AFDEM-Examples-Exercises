//CREATE OBJECTS
//literal 
// var poet = {
//    firstName: "Konstantinos",
//    lastName: "Kavafis",
//    dateOfBirth: 1863,
//    dateOfDeath: 1933,
//    famousPoems: ["Ιθάκη", "Θερμοπύλες", "Περιμένοντας τους Βαρβάρους"]
// };

// console.log(poet);

// // //function constructor

// function Poet(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// const Dimoula = new Poet('Kiki', 'Dimoula', 80);

// console.log(Dimoula);

// //Class

//class GreekPoet {
//    constructor(firstName, lastName, dateOfBirth, dateOfDeath) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.dateOfBirth = dateOfBirth;
//       this.dateOfDeath = dateOfDeath;

//       this.smallBio = function(){
//           return `O ${this.firstName} ${this.lastName} γεννήθηκε το ${this.dateOfBirth} και πέθανε το ${this.dateOfDeath}`;
//       }
//    }
// }

// const Elytis = new GreekPoet('Οδυσσέας', 'Ελύτης', 1911, 1996);

// //console.log(Elytis.smallBio());

// console.log(Object.getOwnPropertyNames(Elytis));
// // console.log(Object.keys(Dimoula));

// //console.log(Object.keys(Elytis));

//ENUMERABLE + Object.keys()
//
// const superBike = {
//     maker: 'Suzuki',
//     model: 'Hayabusa',
//     year: '2018',
//     codeName: 'GSX-R',
//     price: 15000
//   };

// Object.defineProperty(superBike, 'secretAboutHayabusa', {
//      value: 'Speed could kill you',
//      enumerable: false
// });

// console.log(superBike.secretAboutHayabusa);

// // console.log(Object.keys(superBike));  
// console.log(Object.getOwnPropertyNames(superBike)); 



// // const obj = {};
// // Object.defineProperties(obj, {
// //     set1: {enumerable: true},
// //     set2: {enumerable: false},
// // });
// //console.log(Object.keys(obj)); // ["set1"]
// //console.log(Object.getOwnPropertyNames(obj)); // ["set1", "set2"]

// //ADDING A METHOD

//  function Business(name, property, age) {
//        this.name = name;
//        this.prop = property;
//        this.age = age;
// }
//    var person1 = new Business("John", "100.000", "73");
//    var person2 = new Business("Joe", "250.000", "54");
   
//    person1.det = function() {
//       return this.name + " "+" has a property of net worth "+ "" + this.prop;
//    };

//    person2.det = function() {
//       return this.name + " "+" has a property of net worth "+ "" + this.prop;
//    };

//    alert(person2.det() + " and " + person1.det());

// //PROTOTYPE

// String.prototype.countChars = function (c) {
// 	var count=0;
// 	for (var i=0;i<this.length;i++) {
// 		if (this.charAt(i) == c)
// 			count++;
// 		}
// 	return count;
// }

// const msg = "Hello World";
// console.log(msg + " has " + msg.countChars("l") + " letter l's");

// // //MATH RANDOM
// function randomNum(min, max) {
//   const num = Math.floor(Math.random() * (max - min + 3)) + (min * 2) ;
//   return num;
// }

// console.log(randomNum(12, 30));

// //DATE - Create a date Object
//let today = new Date();
// console.log(today);

// let covid19Start = new Date('December 17, 2019 03:24:00')
// let firstLockdownEndGR = new Date(2020, 4); // month index starts from 0
// let birthdayCovid = new Date(2020, 11, 17, 3, 24, 0)            


// //REGEX

//Create a regex

// let myRegExp = /[2b|^2b]/;

// let myOtherRegExp = new RegExp('[2b|^2b]');

// let loveJS = "I love JavaScript";
// let regexp = /LOVE/i;
// alert( regexp.test(loveJS) ); // true

// alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will

// window.close();

// let matches = "JavaScript".match(/HTML/) || [];
// // if (!matches.length) {
// //   alert("No matches"); // no matches
// // }
// // console.log(matches);


// MAPS
//Create a map

//const afterCovidParty = new Map();
// afterCovidParty.set(1 , {τηλέφωνο: 6938674590, ποτό: "Ουίσκι"});
// afterCovidParty.set("Τόνια", {τηλέφωνο: 6986745900, ποτό: "Βότκα"});
// afterCovidParty.set("Αντωνία", {τηλέφωνο: 6986745590, ποτό: "Ρούμι"});
// afterCovidParty.set("Βάσω", {τηλέφωνο: 6944644790, ποτό: "Αναψυκτικά"});
// console.log(afterCovidParty);

// console.log(afterCovidParty.has('Βάσω'));
// console.log(afterCovidParty.delete('Βάσω'));
// console.log(afterCovidParty);

// let poet =  new Map();

// poet.set("First Name", "Konstantinos");
// poet.set("Last Name", "Kavafis");
// poet.set(["Ιθάκη", "Θερμοπύλες", "Περιμένοντας τους Βαρβάρους"], function famousPoems(){});
// poet.set(1933, "Date of Birth")

// console.log(poet);


// //SETS
// let myDoublicateArr = [1, 2, 1, 2, 3, 3, 3];
// let mySetArr = new Set(myDoublicateArr);
// console.log(mySetArr);

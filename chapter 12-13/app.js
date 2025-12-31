//  js-assignment: 12-13
// if...else & else if Statement , Testing Set of Condition
//  question-1
var ch = prompt("Enter your character?")
var code = ch.charCodeAt(0);
var CodeMsg;

if (code >= 48 && code <= 57) {
  CodeMsg = "It a Number!"
} else if (code >= 65 && code <= 90) {
  CodeMsg = "It is an Uppercase Letter"

} else if (code >= 97 && code <= 122) {
  CodeMsg = "It is a Lowercase Letter"
} else {
  CodeMsg = "Invalid Input"
}
alert(CodeMsg)
console.log(CodeMsg);
document.write("<p>" + CodeMsg + "</p>")


//  question-2

var a = prompt("Enter First Number?")
var b = prompt("Enter Second Number?")
if (a > b) {
  alert(a + " Is Larger");
  console.log(a + "Is Larger!");
  document.write("<p>" + a + "Is Larger!" + "</p>");

} else if (b >= a) {
  alert(b + " Is Larger!");
  console.log(b + " Is Larger!");
  document.write("<p>" + b + "Is Larger!" + "</p>");
} else {
  alert("Both Numbers Are Equal!");
  console.log("Both Numbers Are Equal!");
  document.write("<p>Both Numbers Are Equal!</p>");
}


//  question-3

num = +prompt("Enter a number");

if (num >= 0) {
  alert("Number is Positive");
  console.log("Number is Positive");
} else if (num <= 0) {
  alert("Number is Negative");
  console.log("Number is Negative");
} else {
  alert("Number is Zero");
  console.log("Number is Zero");
}

//  question-4

var ch = prompt("Enter one character:");
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
  alert("True (Vowel)");
  console.log("True (Vowel)");
  document.write("<p>True (Vowel):<p>");
} else {
  alert("False (Not a vowel)");
  console.log("False (Not a vowel)");
  document.write("<p>False (Not a vowel):<p>");
}

//  question-5:

var Password = "js@34"
var userPassword = prompt("Enter your password:")

if (userPassword == "") {
  console.log("please Enter your password:");
  document.write("<p>please Enter your password:<p>");
} else if (userPassword == Password) {
  console.log("Correct! The password you entered matches the original password:");
  document.write("<p>Correct! The password you entered matches the original password:<p>");
} else {
  console.log("Incorrect Password!");
  document.write("Incorrect Password!");
}

//   question-6:

var greeting;
var hour = 13

if (hour <= 18) {
  greeting = "Good Day!";
} else {
  greeting = "Good Evening!";
}
alert(greeting)
console.log(greeting)
document.write("<p>" + greeting + "</p>")


// question-7:

var Time = +prompt("Enter time in 24-hour format (e.g. 1900)?")
var timeMsg;

if (Time >= 0 && Time <= 1200) {
  timeMsg = "Good Morning"
} else if (Time >= 1200 && Time <= 1700) {
  timeMsg = "Good Afternoon"
} else if (Time >= 1700 && Time <= 2100) {
  timeMsg = "Good Evening"
} else if (Time >= 2100 && Time <= 2359) {
  timeMsg = "Good night"
} else {
  timeMsg = "Invalid time"
}
alert(timeMsg)
console.log(timeMsg)
document.write("<p>" + timeMsg + "</p>")


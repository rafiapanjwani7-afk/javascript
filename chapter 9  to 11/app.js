// user-input-&-condition-statement:
// question 1
var QuesForUser = prompt("which pakistancity is called as 'city of light'?")
var usercityAns = "karachi"
var weclomenote = "weclome to city of lights!"
if (QuesForUser == usercityAns) {
    console.log(weclomenote);
    document.write("<h1 class='heading'>" + weclomenote + "</h1>")
}
else {
    console.log("wrong answer");
}


// question 2
var gender = prompt("Enter your Gender?")
var genderM = "male"
var genderF = "female"
var message;
if (gender == genderF) {
    message = " Good Morning Mam";
    document.write("<p>" + " Good Morning Mam !" + "</p>")

}
if (gender == genderM) {
    message = " Good Morning Sir";
    document.write("<p>" + " Good Morning Sir !" + "</p>")
}
else {
    message = "Good morning"
}
console.log(message);

// question 3
var ques = prompt("what is the color of traffic signal?")
var ans = "red,green,yellow"
if (ques == ans) {
    console.log("your answer is correct!");
    document.write("<p>your answer is correct!</p>")
    document.write("<table class='traffic-rule' broder='1' cellpadding='30' cellspacing='20'>" + "<tr>" + " <th>signal-color</th>" + "<th> message </th>" + "</tr>" + "<tr>" + "<td> red </td>" + "<td>  must Stop </td>" + " </tr>" + "<tr>" + "<td> yellow </td>" + "<td>  ready to move </td>" + "</tr>" + "<tr>" + "<td>green</td>" + "<td>move now</td>" + "</tr>" + "</table>")
}
else {
    console.log("your answer is wrong!");
    document.write("<p>your answer is wrong!</p>")
    document.write("<table class='traffic-rule' broder='1' cellpadding='30' cellspacing='20'>" + "<tr>" + " <th>signal-color</th>" + "<th> message </th>" + "</tr>" + "<tr>" + "<td> red </td>" + "<td>  must Stop </td>" + " </tr>" + "<tr>" + "<td> yellow </td>" + "<td>  ready to move </td>" + "</tr>" + "<tr>" + "<td>green</td>" + "<td>move now</td>" + "</tr>" + "</table>")
}


// question 4
var fuel = prompt("Enter a remaining fuel?")

if (fuel < 0.25) {
    console.log("Please refill the fuel in your Car")
    document.write("<p>" + "Please refill the fuel in your Car !" + "</p>")

} else {
    console.log("your car fuel is greator than 0.25 liters")
    document.write("<p>" + "your car fuel is greator than 0.25 liters !" + "</p>")
}


// question 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    console.log("given condition for variable a is true")
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
    console.log("given condition for variable b is False")
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
    console.log("Condition 2 is true")
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
    console.log("Condition 4 is true")
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost Equals");
    console.log("Cost are equals")
}


if (true) {
    alert("True");
    console.log("True");

}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
    console.log("car is smaller than cat");
}

// question 6

var sub1 = +prompt("Enter marks of subject 1:")
var sub2 = +prompt("Enter marks of subject 2:")
var sub3 = +prompt("Enter marks of subject 3:")
var totalMarks = 300

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;


if (percentage >= 100) {
    obtainedMarks = "Invalid"
    percentage = "Invalid"
    grade = "Invalid"
    remarks = "Enter marks into 100s"
}
else if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent"
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good"
}
else if (percentage >= 60) {
    grade = "Fail";
    remarks = "Sorry"
}
document.write("<h2>Marks Sheet!</h2>")
document.write("<table class='table-div' broder='1' cellpadding='30' cellspacing='20'>")
document.write("<tr> <th>Total Marks :</th> <td>" + totalMarks + " </td></tr>");
document.write("<tr> <th>Marks Obtained :</th> <td>" + obtainedMarks + "</td></tr>");
document.write("<tr> <th>Percentage :</th> <td>" + percentage + "% </td></tr>");
document.write("<tr> <th>Grade :</th> <td>" + grade + "</td></tr>");
document.write("<tr> <th>Remarks :</th> <td>" + remarks + "</td></tr>");
document.write("</table>")


// question 7

var secretNumber = 8
var userGuess = +prompt("Guess the secret num (1 to 10)?")

if (userGuess == secretNumber) {
    console.log("Bingo! correct answer:")
    document.write("<p>" + "Bingo! correct answer:" + "</P>")
} else if (userGuess + 1 == secretNumber) {
    console.log("Close enough to the correct answer!")
    document.write("<p>" + "Close enough to the correct answer!" + "</P>")
}
else {
    console.log("Wrong guess!");
}

// question 8

var num = +prompt("Enter a number that is divisible by 3 ?")

if (num % 3 === 0) {
    console.log("Number is divisible by 3")
    document.write("<p>" + "Number is divisible by 3 !" + "</p>")

} else {
    console.log("Number is not divisible by 3")
    document.write("<p>" + "Number is not divisible by 3 !" + "</P>")
}


// question 9

var number = +prompt("Enter a Number ? ")

if (num % 2 === 0) {
    console.log("Number is Even")
    document.write("<p>" + "Number Is Even " + "</p>")
} else {
    console.log("Num is not Odd")
    document.write("<p>" + "Number Is Not Odd" + "</p>")
}

// question 10
var temp = +prompt("Enter Temprature (40 to 10)")
if (temp >= 40) {
    console.log("It is too hot outside")
    document.write("<p> " + " Today's weather is too hot outside!" + "</p>")
}
else if (temp >= 30) {
    console.log("The weather today is normal")
    document.write("<p>" + "The weather today is normal!" + "</p>")
}
else if (temp >= 20) {
    console.log("Today's weather is cool")
    document.write("<p>" + "Today's weather is cool!" + "</p>")
}
else if (temp >= 10) {
    console.log("OMG! Today's weather is so cool")
    document.write("<p>" + "OMG! Today's weather is so cool!" + "</p>")

} else {
    console.log("It's very cold.");
    document.write("<p>" + " Today's weather's very cold!" + "</p>")
}


// question 11
var num1 = +prompt("Enter First Num")
var num2 = +prompt("Enter second Num")
var operator = prompt("Enter operator (+, -, *, /, %)")

if (operator == "+") {
    console.log(num1 + num2)
    document.write("<p> solution in addition" + " " + num1 + num2 + "</p>")
}
else if (operator == "-") {
    console.log(num1 - num2)
    document.write("<p> solution in subraction" + " " + num1 - num2 + "</p>")
}
else if (operator == "*") {
    console.log(num1 * num2)
    document.write("<p> solution in multification" + " " + num1 * num2 + "</p>")
}
else if (operator == "/") {
    console.log(num1 / num2)
    document.write("<p> solution in division" + " " + num1 / num2 + "</p>")
}
else if (operator == "%") {
    console.log(num1 % num2)
    document.write("<p> solution in percentage" + " " + num1 % num2 + "</p>")
} else {
    console.log("invalid operator")
}



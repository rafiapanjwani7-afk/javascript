// math-expression:
// Question no1 
var num = 15
++num
console.log(num++);
console.log(num++)
console.log(num);
num--
num--
console.log(--num);

// Question no2
var a = 14, b = 8
var result = --a - --b + ++b + b--
console.log(result);

// Question no3 
var FName = prompt("Enter Your FirstName", "Rafia")
var LName = prompt("Enter Your LastName", "samiullah")
var fullName = FName + "  " + LName + "!"
console.log(fullName);
var welcomeNote = "Welcome to the team," + FName + "  " + LName + "! We're excited to work with you and see your contributions.On behalf of everyone, welcome! We're looking forward to achieving great things together.We're delighted to have you join us. Your skills are a perfect fit, and we can't wait sewhat you'll accomplish. Welcome aboard! Feel free to reach out with any questions as you settle in."

document.write("<div class='box'>" + "<h1 class='heading'>" + fullName + "</h1>" + "<p class='para'>" + welcomeNote + "</p>" + "</div>")

// Question no5

document.writeln("<h1 class='myheading'>Multiplication Table:</h1>")
var num = prompt("Enter a number for multiplication table", "5");

document.write("<div class='div-table'>");
document.write(num + " x 01 = " + (num * 1) + "<br>");
document.write(num + " x 02 = " + (num * 2) + "<br>");
document.write(num + " x 03 = " + (num * 3) + "<br>");
document.write(num + " x 04 = " + (num * 4) + "<br>");
document.write(num + " x 05 = " + (num * 5) + "<br>");
document.write(num + " x 06 = " + (num * 6) + "<br>");
document.write(num + " x 07 = " + (num * 7) + "<br>");
document.write(num + " x 08 = " + (num * 8) + "<br>");
document.write(num + " x 09 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

document.write("</div>");

// Question no6



var sub1 = "English";
var sub2 = "Math";
var sub3 = "Urdu";

var totalMarksEach = 100;

var marks1 = +prompt(" Enter obtained marks for " + sub1);
var marks2 = +prompt(" Enter obtained marks for " + sub2);
var marks3 = +prompt(" Enter obtained marks for " + sub3);

var totalMarks = totalMarksEach * 3;
var obtainedTotal = marks1 + marks2 + marks3;

var per1 = (marks1 / totalMarksEach) * 100;
var per2 = (marks2 / totalMarksEach) * 100;
var per3 = (marks3 / totalMarksEach) * 100;

var finalPercentage = (obtainedTotal / totalMarks) * 100;


document.write("<div class='result-table'>");

document.write("<table border='4' cellpadding='8'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + per1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + per2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + per3 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + totalMarks + "</th>");
document.write("<th>" + obtainedTotal + "</th>");
document.write("<th>" + finalPercentage + "%</th>");
document.write("</tr>");

document.write("</table>");
document.write("</div>");
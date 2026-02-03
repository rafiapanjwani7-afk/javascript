//---------------------function Methods---------------------//

//Question 1: Write a function that displays current date & time in your browser.

function tellTime() {
    var now = new Date()
    document.write("<p>" + now + "</p>")
}
tellTime()


// Question 2: Write a function that takes first & last name and then it greets the user using his full name.

function greetsUser(firstName, LastName) {
    var fullName = firstName + " " + LastName
    document.write("<p>Welcome " + fullName + "</p>")
}
var firstName = prompt("Enter your first name:")
var LastName = prompt("Enter your last name:")
greetsUser(firstName, LastName)


// Question 3: write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addNumbers(num1, num2) {
    var sum = parseInt(num1) + parseInt(num2)
    alert("The sum is: " + sum )
    document.write("<p>The sum is: " + sum + "</p>")
}
var num1 = prompt("Enter first number:")
var num2 = prompt("Enter second number:")
addNumbers(num1, num2)


// question 4: Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }
    document.write("<p>The result is: " + result + "</p>");
}
var num1 = parseFloat(prompt("Enter first number:"));
var operator = prompt("Enter operator (+, -, *, /):");
var num2 = parseFloat(prompt("Enter second number:"));
calculator(num1, num2, operator)


// Question 5: Write a function that squares its argument.

function square(num) {
    document.write("<p>The square of " + num + " is: " + (num * num) + "</p>");
}
var number = parseFloat(prompt("Enter a number to square:"));
square(number);


// Question 6: Write a function that computes factorial of a number.

function factorial(num) {
    if (num === 0 || num === 1) {
        var fact = 1;
        document.write("<p>The factorial of " + num + " is: 1</p>");
        alert("The factorial of " + num + " is: 1");
    } else {
        for (var i = 0; i >= 1; i--) {
            fact = fact * i;    
        }
         document.write("<p>The factorial of " + num + " is: " + fact + "</p>");
    }
}
var number = parseInt(prompt("Enter a number for factorial:"));
 fact = factorial(number);
alert("The factorial of " + number + " is: " + fact);
 

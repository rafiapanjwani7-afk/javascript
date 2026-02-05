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
    return fullName;
}
var firstName = prompt("Enter your first name:")
var LastName = prompt("Enter your last name:")
greetsUser(firstName, LastName)


// Question 3: write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addNumbers(num1, num2) {
    var sum = parseInt(num1) + parseInt(num2);
    alert("The sum is: " + sum)
    document.write("<p>The sum is: " + sum + "</p>")
    return sum;
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
    } else {
        result = "Invalid operator";
    }
    document.write("<p>The result is: " + result + "</p>");
    return result;
}
var num1 = Number(prompt("Enter first number:"));
var operator = prompt("Enter operator (+, -, *, /):");
var num2 = Number(prompt("Enter second number:"));
calculator(num1, num2, operator)


// Question 5: Write a function that squares its argument.

function square(num) {
    document.write("<p>The square of " + num + " is: " + (num * num) + "</p>");
}
var number = Number(prompt("Enter a number to square:"));
square(number);


// Question 6: Write a function that computes factorial of a number.

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
var number = Number(prompt("Enter a number for factorial:"));
result = factorial(number);
alert("The factorial of " + number + " is: " + result);
document.write("<p>The factorial of " + number + " is: " + result + "</p>");


// Question 7: write a function that take start and end number as inputs & display counting in your browser.

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(`<p>${i}</p>`)
    }
}
var start = Number(prompt("Enter start number:"));
var end = Number(prompt("Enter end number:"));
counting(start, end);


// Question 8: Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2

function calculationHypotenuse(base, Perpendicular) {
    var base, Perpendicular;
    function CalculateSquare(num) {
        num = num ** 2;
        return num;
    }
    base = CalculateSquare(base);
    Perpendicular = CalculateSquare(Perpendicular);
    var hypotenuse = base + Perpendicular;
    return hypotenuse;
}
var base = Number(prompt("Enter base of triangle:"));
var perpendicular = Number(prompt("Enter perpendicular of triangle:"));
var hypotenuse = calculationHypotenuse(base, perpendicular);
alert("The hypotenuse of the triangle is: " + hypotenuse);
document.write("<p>The hypotenuse of the triangle is: " + hypotenuse + "</p>");


// Question 9: Write a function that calculates the area of a rectangle. A = width * height. Pass width and height in following manner: i. Arguments as value ii. Arguments as variables

function areaOfRectangle(width, height) {
    var area = width * height;
    return area;
}
var width = Number(prompt("Enter width of rectangle:"));
var height = Number(prompt("Enter height of rectangle:"));
var area = areaOfRectangle(width, height);
alert("The area of the rectangle is: " + area);
document.write("<p>The area of the rectangle is: " + area + "</p>");


// Question 10: Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        document.write("<p>" + str + " is a palindrome.</p>");
    } else {
        document.write("<p>" + str + " is not a palindrome.</p>");
    }
}
var inputString = prompt("Enter a string to check for palindrome:");
palindrome(inputString);


// Question 11: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function titleCase(msg) {
    var words = msg.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ");
}
var message = prompt("Enter a string to convert to title case:");
var remainingWords = message.slice(1);
var totalMessage = message[0].toUpperCase() + remainingWords.toLowerCase();
var titleCasedMessage = titleCase(totalMessage);
alert("Title Case: " + titleCasedMessage);
document.write("<p>Title Case: " + titleCasedMessage + "</p>");


// Question 12: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
var inputString = prompt("Enter a string to find the longest word:");
var longestWord = findLongestWord(inputString);
alert("The longest word is: " + longestWord);
document.write("<p>The longest word is: " + longestWord + "</p>");

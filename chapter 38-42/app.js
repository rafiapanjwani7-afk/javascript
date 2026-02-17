/*---------------------js assignment 38 to 40 ------------------*/
// Question 1
function power(base, exp) {
    var power = base ** exp;
    return power;
}
var base = Number(prompt("Enter the base number:"));
var exponent = Number(prompt("Enter the exponent:"));
var result = power(base, exponent);
console.log(result);
document.write(base + '<sup>' + exponent + '</sup>' + 'is ' + result + '<br>')


// Question 2
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a leap year.";
    } else {
        return year + " is not a leap year.";
    }
}
var yearToCheck = prompt("Enter a year to check if it's a leap year:");
console.log(leapYear(yearToCheck));
document.write(leapYear(yearToCheck) + '<br>')


// Question 3
function areaOfTriangle(base, height) {
    return (base * height) / 2;
}
var base = Number(prompt("Enter the base of the triangle:"));
var height = Number(prompt("Enter the height of the triangle:"));
var area = areaOfTriangle(base, height);
console.log("The area of the triangle is: " + area);
document.write("The area of the triangle is: " + area + "<br>")


// Question 4
function calculateAverage(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}
var marks = [];
for (var i = 0; i < 3; i++) {
    var mark = Number(prompt("Enter marks for subject " + (i + 1) + ":"));
    marks.push(mark);
}
var average = calculateAverage(marks);
console.log("The average marks is: " + average);
document.write("The average marks is: " + average + "%" + "<br>")


// Question 5
function findIndex(arr, value) {
    var str;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            str = i;
            break;
        }
    }
    return str;
}
var arr = "hello world".split('');
var indexof = prompt("Enter a value to find its index:");
var index = findIndex(arr, indexof);
document.write("The index of " + indexof + " is: " + index + '<br>')


// Question 6
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
var inputString = prompt("Enter a string to remove vowels:");
var resultString = removeVowels(inputString);
console.log("String after removing vowels: " + resultString);
document.write("String after removing vowels: " + resultString + "<br>")

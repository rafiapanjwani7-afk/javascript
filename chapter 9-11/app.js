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
var gender = prompt("what is your gender?")
var genderM = "male"
var genderF = "female"
if (gender == genderF) {
    console.log(" Good Morning Mam");
    document.write("<p>" + " Good Morning Mam !" + "</p>")

}
if (gender == genderM) {
    console.log("Good Morning Sir ");
    document.write("<p>" + " Good Morning Sir !" + "</p>")
}


// question 3
var ques = prompt("what is the color of traffic signal")
var ans = "red,green,yellow"
if (ques == ans) {
    console.log("your answer is correct!");
    document.write("<table class='traffic-rule'>" +
        "<tr>" +
        " <th>signal-color</th>" +
        "<th> message </th>" +
        "</tr>" +
        "<tr>" +
        "<td> red </td>" +
        "<td>  must Stop </td>" +
        " </tr>" +
        "<tr>" +
        "<td> yellow </td>" +
        "<td>  ready to move </td>" +
        "</tr>" +
        "<tr>" +
        "<td>green</td>" +
        "<td>move now</td>" +
        "</tr>" +
        "</table>")
}
else {
    console.log("your answer is wrong!");
    document.write("<table class='traffic-rule'>" +
        "<tr>" +
        " <th>signal-color</th>" +
        "<th> message </th>" +
        "</tr>" +
        "<tr>" +
        "<td> red </td>" +
        "<td>  must Stop </td>" +
        " </tr>" +
        "<tr>" +
        "<td> yellow </td>" +
        "<td>  ready to move </td>" +
        "</tr>" +
        "<tr>" +
        "<td>green</td>" +
        "<td>move now</td>" +
        "</tr>" +
        "</table>")
}


// question 4
var fuel = prompt("Enter a remaining fuel")

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

var sub1 = +prompt("Enter marks of eng")
var sub2 = +prompt("Enter marks of urdu")
var sub3 = +prompt("Enter marks of math")
var totalMarks = 300

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var Grade = "A grade"
var Remarks = "you Need To Improve"


if (percentage >= 80) {
    console.log("Excellent");
    console.log("A-one");
} else {
    if (percentage >= 70) {
        console.log("A");
        console.log("Good");
    } else {
        if (percentage >= 60) {
            console.log("B");
            console.log("You need to improve");
        } else {
            console.log("Fail");
            console.log("Sorry");
        }
    }
}
document.write("<section class='box'>" +
    "<h2>Marks Sheet</h2>" +
    "Total Marks : " + totalMarks + "<br>" +
    "Marks Obtained : " + obtainedMarks + "<br>" +
    "Percentage : " + percentage + "%<br>" +
    "Grade : " + Grade + "<br>" +
    "Remarks : " + Remarks +
    "</section>")


// question 7

var secretNumber = 8
var userGuess = +prompt("Guess the secret num (1 to 10)?")

if (userGuess == secretNumber) {
    console.log("Bingo! correct answer:")
    document.write("<p>" + "Bingo! correct answer:" + "</P>")
} else {
    if (userGuess + 1 == secretNumber) {
        console.log("Close enough to the correct answer!")
    }
    else {
        console.log("Wrong guess!");
    }
}

// question 8

var num = +prompt("Enter a number that is divisible by 3 ?")

if (num % 3 === 0) {
    console.log("Number is divisible by 3")
    document.write("<p>" + "Number is divisible by 3 !" + "</p>")

} else {
    console.log("Num is not divisible by 3")
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

if (temp > 40) {
    console.log("It is too hot outside")
} else {
    if (temp > 30) {
        console.log("The weather today is normal")
    }
    else {
        if (temp > 20) {
            console.log("Today's weather is cool")
        }
        else {
            if (temp > 10) {
                console.log("OMG! Today's weather is so cool")
            }
            else {
                console.log("It's very cold.");
            }
        }
    }
}


// question 11
var num1 = +prompt("Enter First Num")
var num2 = +prompt("Enter second Num")
var operator = prompt("Enter operator (+, -, *, /, %)")

if (operator == "+") {
    console.log(num1 + num2)
    document.write("<p>" + num1 + num2 + "</p>")

}
else {
    if (operator == "-") {
        console.log(num1 - num2)
        document.write("<p>" + num1 - num2 + "</p>")
    }

    else {
        if (operator == "*") {
            console.log(num1 * num2)
            document.write("<p>" + num1 * num2 + "</p>")
        }

        else {
            if (operator == "/") {
                console.log(num1 / num2)
                document.write("<p>" + num1 / num2 + "</p>")
            }

            else {
                if (operator == "%") {
                    console.log(num1 % num2)
                    document.write("<p>" + num1 % num2 + "</p>")
                }

                else {
                    console.log("invalid operator")
                }

            }
        }
    }
}


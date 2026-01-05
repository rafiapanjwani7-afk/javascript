//  js-assignment: array
// question 1:

var studentsLiteral = [];
console.log(studentsLiteral)
document.write("<p> solution 1: Empty Array (Literal)! " + studentsLiteral + "</p>")


// question 2:

var studentsObject = new Array();
console.log(studentsObject);
document.write("<p> solution 2: Empty Array (Object)! " + studentsObject + "</p>")


// question 3:

var stringsArray = [" Burger", " Pizza", " Pasta"]
console.log(stringsArray);
document.write("<p> solution 3: stringArray " + stringsArray + "</p>");

// question 4:

var numbersArray = [34, 56, 45]
console.log(numbersArray);
document.write("<p> solution 4: numbersArray " + numbersArray + "</p>");



// question 5:

var booleanArray = [true, false,]
console.log(booleanArray);
document.write("<p> solution 5 booleansArray " + booleanArray + "</p>");


// question 6:

var mixedArray = ["Burger ", 30, true]
console.log(mixedArray);
document.write("<p> solution 6: mixedArray " + mixedArray + "</p>");



// question 7:

var Qualification = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHIL", "PHD"]
console.log(Qualification);
document.write("<div class='box'> <h1> Qualification: </h1>" + "<ul><li>" + Qualification[0] + "</li><li>" + Qualification[1] + "</li><li>" + Qualification[2] + "</li> <li>" + Qualification[3] + "</li><li>" + Qualification[4] + "</li><li>" + Qualification[5] + "</li><li>" + Qualification[6] + "</li><li>" + Qualification[7] + "</li></ul> </div>");



// question 8:

var studentName = [" Micheal ", " Jhon ", " Tony "]
var studentScore = [390, 260, 440]
var totalmarks = 500
console.log(" your score " + studentName[0] + " is " + studentScore[0] + " . percentage: " + (studentScore[0] / totalmarks * 100) + "%");
console.log(" your score " + studentName[1] + " is " + studentScore[1] + " . percentage: " + (studentScore[1] / totalmarks * 100) + "%");
console.log(" your score " + studentName[2] + " is " + studentScore[2] + " . percentage: " + (studentScore[2] / totalmarks * 100) + "%");
document.write("<div class='box box1'> <h1> score card: </h1>" + "<ul><li>" + " your score " + studentName[0] + " is " + studentScore[0] + " . percentage: " + (studentScore[0] / totalmarks * 100) + "%" + "</li><li>" + " your score " + studentName[1] + " is " + studentScore[1] + " . percentage: " + (studentScore[1] / totalmarks * 100) + "%" + "</li><li>" + " your score " + studentName[2] + " is " + studentScore[2] + " . percentage: " + (studentScore[2] / totalmarks * 100) + "%" + "</li></ul> </div>");


// question 9:

var colors = [" Red", " Green", " Blue"]
console.log(" initial Array! " + colors)
document.write("<div class='box box2'><p>initial array! " + colors + " </p>")

var FirstColors = prompt("Enter A Color To Add At The Begining:")
colors.unshift(" " + FirstColors)
console.log(" After Unshift! " + colors);
document.write("<p> After unshift! " + colors + "</p>")

var LastColors = prompt("Enter a color to add at the end")
colors.push(" " + LastColors)
console.log(" After Push " + colors)
document.write("<p> After push! " + colors + "</p>")

colors.unshift(" Brown", " Black")
console.log("After Unshift" + colors)
document.write("<p> After Add two more color by using unshift! " + colors + "</p>")

colors.shift()
console.log(" After deleting first color:" + colors)
document.write("<p> After deleting first color by using shift! " + colors + "</p>")


colors.pop()
console.log(" After Pop" + colors)
document.write("<p> After delecting last color by using pop! " + colors + "</p> </div>")

// Question 10:
// Question 11:
// Question 12:


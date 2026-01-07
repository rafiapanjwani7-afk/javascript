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

var stringsArray = [" Pineapple", " Mango", " Strawberry"]
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

var mixedArray = ["strawberry ", 30, true]
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
// color add and remove by using array:

var colors = [" Red", " Green", " Blue"]
console.log(" initial Array! " + colors)
document.write("<div class='box box2'><p>initial array! " + colors + " </p>")

// part (a):
var FirstColors = prompt("Enter A Color To Add At The Begining:")
colors.unshift(" " + FirstColors)
console.log(" After Unshift! " + colors);
document.write("<p> After unshift! " + colors + "</p>")

// part (b):
var LastColors = prompt("Enter a color to add at the end")
colors.push(" " + LastColors)
console.log(" After Push " + colors)
document.write("<p> After push! " + colors + "</p>")

// part (c):
colors.unshift(" Brown", " Black")
console.log("After Unshift" + colors)
document.write("<p> After Add two more color by using unshift! " + colors + "</p>")

// part (d):
colors.shift()
console.log(" After deleting first color:" + colors)
document.write("<p> After deleting first color by using shift! " + colors + "</p>")

// part (e):
colors.pop()
console.log(" After Pop" + colors)
document.write("<p> After delecting last color by using pop! " + colors + "</p>")

// part (f):
var addIndex = +prompt("At which index do you want to add the color?")
var addColor = prompt("Enter the color name")
colors.splice(addIndex, 0, addColor);
console.log("Updated Array: " + colors);
document.write("<p> Updated Array: " + colors + "</p> ")

// part (g)
var delIndex = +prompt("At which index do you want to delete the color?")
var delColor = prompt("How many colors you want to delete:")
colors.splice(delIndex, delColor);
console.log("Updated final color Array: " + colors);
document.write("<p>Updated final colors Array: " + colors + "</p> </div>")


// question 10:
// student score in assending order:

var ScoreStudent = [390, 260, 440, 180]
var Score = [390, 260, 440, 180]
console.log(Score)
console.log(ScoreStudent.sort())
document.write("<div class='box box3'><p> score of student: " + Score + "</p> <p> order score for student: " + ScoreStudent.sort() + "</p> </div>")

// question 11:

var city = [" Karachi", " Islamabad", " Quetta", " Peshawar", " Lahore"]
console.log(city);
var slicedCity = city.slice(1, 3)
console.log(slicedCity);
document.write("<p> cities lists: " + city + "</p> <p> selected cities list:  " + slicedCity + "</p>")


// question 12:
// var arr =[" This" ," Is", " My"," Cat"]

var Sentence = [" This", " Is", " My", " Cat"]
console.log(Sentence)
var joinedArr = Sentence.join(" ")
console.log(joinedArr)
document.write("<h3> Array: </h3> <p>" + Sentence + "</p> <h3>String: </h3> <p>" + joinedArr + "</P>")


// question 13:
// (First In First Out)  Its Mean FIFO:

var device = [];
device.unshift(" Keyboard");
device.unshift(" Mouse");
device.unshift(" Printer");
device.unshift(" moniter");
console.log("device after inserting values: " + device)
document.write("<div class='box box4'><p> device after inserting values:  " + device + "</p> ")
var firstOut = device.shift();
console.log("First Out Value: " + firstOut)
console.log("Remaining device: " + device)
document.write("<p> First Out Value: " + firstOut + "</p> ")
document.write("<p> Remaining device: " + device + "</p> ")
var secondOut = device.shift()
console.log("second Out Value: " + secondOut)
console.log("Remaining device: " + device)
document.write("<p> second Out Value: " + secondOut + "</p> ")
document.write("<p> Remaining device: " + device + "</p> ")
var thridOut = device.shift()
console.log("third Value: " + thridOut)
console.log("Remaining device: " + device)
document.write("<p> third Out Value: " + thridOut + "</p> ")
document.write("<p> Remaining device: " + device + "</p> </div> ")


// question 14:
// (Last In First Out) Its Mean LIFO:

var deviceName = [];
deviceName.push(" Keyboard");
deviceName.push(" Mouse");
deviceName.push(" Printer");
deviceName.push(" moniter");
console.log("device after inserting values: " + deviceName)
document.write(" <div class='box box5'><p> device after inserting values:  " + deviceName + "</p> ")
var firstOut = deviceName.shift();
console.log("First Out Value: " + firstOut)
console.log("Remaining device: " + deviceName)
document.write("<p> First Out Value: " + firstOut + "</p> ")
document.write("<p> Remaining device: " + deviceName + "</p> ")
var secondOut = deviceName.shift()
console.log("second Out Value: " + secondOut)
console.log("Remaining device: " + deviceName)
document.write("<p> second Out Value: " + secondOut + "</p> ")
document.write("<p> Remaining device: " + deviceName + "</p> <div>")


// question 15:
// DropDown select/menu:

var MobileName = [" Apple", " Nokia", " Samsung", " Motrola", " Realme", " Tecno"]
document.write("<select name='phone' multiple size ='1'><p><option value=''>" + "  --------------- Phone ManuFeatures --------------- " + "</option></p><p><option value='Menu'>" + MobileName + "</option></p></select>")


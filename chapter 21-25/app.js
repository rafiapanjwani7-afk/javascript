// ----------------- assignment 21-25 String Methods ----------------- //
// ---QUESTION: 1--- //

var firstName = prompt("Enter Your FirstName")
var lastName = prompt("Enter Your LastName")
var fullName = firstName.toLowerCase() + " " + lastName.toLowerCase()
alert("Hello !" + " " + fullName + ":")
document.write("Hello !" + " " + fullName + ": <br>")


// ---QUESTION: 2--- //

var favMobile = prompt("Enter Your Favorite Mobile Phone Model ?")
document.write("My favorite phone is: " + favMobile + "<br>")
document.write("Length Of String is : " + favMobile.length + "<br>")


// ---QUESTION: 3--- //

var country = "pakistan"
var countryInd = country.indexOf("n");
document.write("String: " + country + "</br>")
document.write("Index Of 'n': " + countryInd + "</br> ")


// ---QUESTION: 4

var Title = "Hello World !"
var TitleInd = Title.lastIndexOf("1");
document.write("String: " + Title + "</br>")
document.write("Index of '1': " + TitleInd + "</br>")


// ---QUESTION: 5--- //

var country = "pakistan"
var countryInd = country[3]
document.write("String :" + country + "</br>")
document.write("Character at index 3: " + countryInd + "</br>")


// ---QUESTION: 6--- //

var firstName = prompt("Enter Your FirstName")
var lastName = prompt("Enter Your LastName")
var fullName = firstName.concat(" ", lastName)
alert("Hello" + " " + fullName.toLowerCase() + ":")
document.write("Hello !" + " " + fullName + ": <br>")


// ---QUESTION: 7--- //

var city = "hyderabad";
var replaceCity = city.replace("Hyderabad ", "Islamabad");
document.write("city: " + city + "</br>")
document.write("After Replacement: " + replaceCity + "<br>")


// ---QUESTION: 8--- //

var message = "Ali and sami are bestfriends. They play circket and football together"
var new$Message = message.replaceAll("and", "&")
document.write("var message :" + new$Message + "</br>")


// ---QUESTION: 9--- //

var Str = "472";
document.write("value: " + Str + "<br>");
document.write("Type: " + typeof (Str) + "<br>");
var num = 472;
document.write("value: " + num + "<br>");
document.write("Type: " + typeof (num) + "<br>");


// ---QUESTION: 10--- //

var userInp = prompt("Enter your input ?")
document.write("User Input: " + userInp + "</br>")
document.write("User Input: " + userInp.toUpperCase() + "</br>")


// ---QUESTION: 11 ---//

var myName = prompt("Enter your words ?")
document.write("User Input: " + myName + "</br>")
var firstChar = myName.slice(0, 1)
var remaingChar = myName.slice(1)
var titleCase = firstChar.toUpperCase() + remaingChar.toLowerCase()
document.write("Title Case: " + titleCase + "</br>")


// ---QUESTION: 12 --- //

var num = 35.36
var dotIndex = num.toString().replace(".", "")
document.write("Number: " + num + "<br>");
document.write("Result: " + dotIndex + "</br>");


// ---QUESTION: 13--- //

var userName = prompt("Enter Your Name?")
var charValue;
for (let i = 0; i < userName.length; i++) {
    charValue = userName[i].charCodeAt(0)
    if (charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64) {
        alert("Please enter a valid username")
        document.write("Please enter a valid username </br>")
    }
}


// ---QUESTION: 14---//

document.write(`<h1>bakery:</h1>`)
var bak_item = ["cake", "apple pie", "cookies", "chips", "patties"]
var userOrder = prompt("Weclome To ABC bakery. What Do You Want To order Sir/Ma'am?")
var falg = false
for (i = 0; i < bak_item.length; i++) {
    if (userOrder.toLowerCase() === bak_item[i]) {
        falg = true
        document.write("<p>" + bak_item[i] + " is <strong> available </strong> at index " + i + " in our bakery </p>")
    }
}
if (!falg) {
    document.write("<p> we are sorry ! " + userOrder + " is<strong> not available </strong> in our bakery </p>")
}


// ---QUESTION: 16--- //

var str = "University of Karachi";
document.write(str + "</br>")
var arr = str.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}


// ---QUESTION: 17--- //

var country = prompt("Which country you belong?")
var countryInd = country.charAt(country.length - 1);
document.write("User Input: " + country + "</br>")
document.write("last character of input is: " + countryInd + "</br> ")


// ---QUESTION: 18--- //

var newText = "The quick brown fox jumps over the lazy dog"
var changeText = newText.replace(/The/g, "the")
document.write("Text: " + newText + "<br>")
document.write("There are " + changeText + " occurrence(s) of word 'the'</br>")